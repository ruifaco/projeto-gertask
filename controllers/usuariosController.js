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

// busca usuário por ID

const buscarUsuarioPorId = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const usuario = await UsuarioModel.buscarPorId(id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
};


module.exports = {
  listarUsuarios,  buscarUsuarioPorId,
};
