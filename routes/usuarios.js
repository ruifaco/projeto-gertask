const express = require('express');
const router = express.Router();

// importa o controller
const usuariosController = require('../controllers/usuariosController');

// usa a função do controller como callback da rota
router.get('/usuarios', usuariosController.listarUsuarios);
router.get('/usuarios/:id', usuariosController.buscarUsuarioPorId);

module.exports = router;
