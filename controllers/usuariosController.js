const UsuarioModel = require('../models/userModel');

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.listarTodos(); // chama o model
    res.json(usuarios); // responde com JSON
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
};

module.exports = {
  listarUsuarios,
};
