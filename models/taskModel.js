const db = require('../config/db');

class TaskModel {
  static async listarTodas() {
    const result = await db.query('SELECT * FROM tasks');
    return result.rows;
  }

  static async listarPorUsuario(idUsuario) {
    const result = await db.query(
      'SELECT * FROM tasks WHERE id_usuario = $1',
      [idUsuario]
    );
    return result.rows;
  }

  static async criar({ id, titulo, prazo, inicio, id_usuario }) {
    const result = await db.query(
      'INSERT INTO tasks (id, titulo, prazo, inicio, id_usuario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, titulo, prazo, inicio, id_usuario]
    );
    return result.rows[0];
  }
}

module.exports = TaskModel;
