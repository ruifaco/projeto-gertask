const UsuarioModel = require('../models/userModel');

// GET /usuarios
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.listarTodos();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
};

module.exports = {
  listarUsuarios,
};
