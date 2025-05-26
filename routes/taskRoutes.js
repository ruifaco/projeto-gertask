const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

router.post('/', TarefaController.criarTarefa);
router.get('/', TarefaController.listarTarefas);
router.put('/:id', TarefaController.editarTarefa);
router.delete('/:id', TarefaController.excluirTarefa);



module.exports = router;