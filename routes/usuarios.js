const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// --- API Endpoints ---
router.get('/usuarios', userController.listarUsuarios);
router.post('/usuarios', userController.criarUsuario);

// --- EJS 

// Rota para exibir um formulário de criação de usuário
router.get('/usuarios/novo', (req, res) => {
  res.render('pages/newUser');
});

module.exports = router;