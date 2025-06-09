const TaskModel = require('../models/taskModel');

const listarTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.listarTodas();
    res.json(tasks);
  } catch (error) {
    console.error('Erro ao listar tasks:', error);
    res.status(500).json({ erro: 'Erro interno ao listar tasks' });
  }
};

const buscarTaskPorId = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const task = await TaskModel.buscarPorId(id);
    if (!task) return res.status(404).json({ erro: 'Task não encontrada' });
    res.json(task);
  } catch (error) {
    console.error('Erro ao buscar task:', error);
    res.status(500).json({ erro: 'Erro interno ao buscar task' });
  }
};

const criarTask = async (req, res) => {
    const { titulo, prazo, inicio, id_usuario } = req.body;
  
    try {
      const novaTask = await TaskModel.criar({ titulo, prazo, inicio, id_usuario });
      res.status(201).json(novaTask);
    } catch (error) {
      console.error('Erro ao criar task:', error);
      res.status(500).json({ erro: 'Erro interno ao criar task' });
    }
  };
  
  

const atualizarTask = async (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, prazo, inicio, id_usuario } = req.body;
  
    try {
      const taskAtualizada = await TaskModel.atualizar(id, { titulo, prazo, inicio, id_usuario });
      if (!taskAtualizada) return res.status(404).json({ erro: 'Task não encontrada' });
      res.json(taskAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar task:', error);
      res.status(500).json({ erro: 'Erro interno ao atualizar task' });
    }
};

const deletarTask = async (req, res) => {
    const id = parseInt(req.params.id);
  
    try {
      const taskRemovida = await TaskModel.deletar(id);
      if (!taskRemovida) return res.status(404).json({ erro: 'Task não encontrada' });
      res.json({ mensagem: 'Task deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar task:', error);
      res.status(500).json({ erro: 'Erro interno ao deletar task' });
    }
  };
  
  

module.exports = {
    listarTasks,
    buscarTaskPorId,
    criarTask,
    atualizarTask,
    deletarTask
}

