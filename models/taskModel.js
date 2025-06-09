const db = require('../config/db');

class TaskModel {
  static async listarTodas() {
    const result = await db.query('SELECT * FROM tasks');
    return result.rows;
  }

  static async buscarPorId(id) {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async criar({ titulo, prazo, inicio, id_usuario }) {
    const result = await db.query(
      'INSERT INTO tasks (titulo, prazo, inicio, id_usuario) VALUES ($1, $2, $3, $4) RETURNING *',
      [titulo, prazo, inicio, id_usuario]
    );
    return result.rows[0];
  }
  
  

  static async atualizar(id, { titulo, prazo, inicio, id_usuario }) {
    const result = await db.query(
      `UPDATE tasks 
      SET titulo = $1, prazo = $2, inicio = $3, id_usuario = $4 
      WHERE id = $5 
      RETURNING *`,
      [titulo, prazo, inicio, id_usuario, id]
    );
    return result.rows[0];
  }
  static async deletar(id) {
    const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }  
}
module.exports = TaskModel;
