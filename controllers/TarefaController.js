const pool = require('../config/db'); 


exports.criarTarefa = async (req, res) => {


  const { titulo, prazo, inicio, id_usuario } = req.body;


    if (!titulo || !prazo || !inicio || id_usuario === undefined) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios: titulo, prazo, inicio, id_usuario.' });
  }

  const query = `
    INSERT INTO tasks (titulo, prazo, inicio, id_usuario)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [titulo, prazo, inicio, id_usuario];

  try {
    const result = await pool.query(query, values);
    const novaTarefa = result.rows[0]; 


      res.status(201).json(novaTarefa);
  } catch (err) {

      console.error('Erro ao criar tarefa:', err.message);
    console.error(err.stack); 
    res.status(500).json({ error: 'Erro interno ao criar a tarefa.' });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {

    const query = 'SELECT * FROM tasks ORDER BY id ASC;'; 
  
    try {
      const result = await pool.query(query);
      const tarefas = result.rows; 
  
      res.status(200).json(tarefas);
    } catch (err) {
      console.error('Erro ao listar tarefas:', err.message);
      console.error(err.stack);
      res.status(500).json({ error: 'Erro interno ao listar as tarefas.' });
    }
};
  
exports.editarTarefa = async (req, res) => {
    const { id } = req.params;

    const { titulo, prazo, inicio } = req.body;
    if (titulo === undefined || prazo === undefined || inicio === undefined) {
        return res.status(400).json({ error: 'Para editar, forneça os campos: titulo, prazo e inicio.' });
      }
    
      const query = `
        UPDATE tasks
        SET titulo = $1, prazo = $2, inicio = $3
        WHERE id = $4
        RETURNING *;
      `;
      const values = [titulo, prazo, inicio, id];
    
      try {
        const result = await pool.query(query, values);
    
        if (result.rowCount === 0) {
          return res.status(404).json({ error: 'Tarefa não encontrada com o ID fornecido.' });
        }
    
        const tarefaAtualizada = result.rows[0];
    
        res.status(200).json(tarefaAtualizada);
      } catch (err) {
        console.error(`Erro ao editar tarefa com ID ${id}:`, err.message);
        console.error(err.stack);
        res.status(500).json({ error: 'Erro interno ao editar a tarefa.' });
        }
};

exports.excluirTarefa = async (req, res) => {
    const { id } = req.params;
  
    const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *;';
    const values = [id];
  
    try {
        const result = await pool.query(query, values);
  
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Tarefa não encontrada com o ID fornecido.' });
        }
  
 
        res.status(200).json({ message: 'Tarefa excluída com sucesso.', tarefaExcluida: result.rows[0] });
  
    } catch (err) { 
        console.error(`Erro ao excluir tarefa com ID ${id}:`, err.message);
        console.error(err.stack);
        res.status(500).json({ error: 'Erro interno ao excluir a tarefa.' });
    }
};

