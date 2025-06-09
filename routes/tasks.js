const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const TaskModel = require('../models/taskModel');


router.get('/tasks', tasksController.listarTasks);
router.get('/tasks/:id', tasksController.buscarTaskPorId);
router.post('/tasks', tasksController.criarTask);
router.put('/tasks/:id', tasksController.atualizarTask);
router.delete('/tasks/:id', tasksController.deletarTask);

// Para o EJS
router.get('/tarefas', async (req, res) => {
    const tarefas = await TaskModel.listarTodas();
    res.render('pages/tasks', { tarefas });
});
  
// Mostrar formulário para criar nova tarefa
router.get('/novo', (req, res) => {
    res.render('pages/newTask');
  });
  
  
// rota para o formulário
router.get('/tarefas/:id/editar', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const tarefa = await TaskModel.buscarPorId(id);
      if (!tarefa) return res.status(404).send('Tarefa não encontrada');
      res.render('pages/editarTask', { tarefa });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno');
    }
  });
  



module.exports = router;
