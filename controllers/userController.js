const UserModel = require('../models/userModel');

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await UserModel.listarTodos();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ erro: 'Erro interno ao listar usuários' });
  }
};

const criarUsuario = async (req, res) => {
  const { email, senha } = req.body;

  // Validação simples
  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
  }

  try {
    const novoUsuario = await UserModel.criar({ email, senha });
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);

    // Erro específico para email duplicado no PostgreSQL
    if (error.code === '23505') {
      return res.status(409).json({ erro: 'Este email já está em uso.' });
    }

    res.status(500).json({ erro: 'Erro interno ao criar usuário' });
  }
};

module.exports = {
  listarUsuarios,
  criarUsuario,
};