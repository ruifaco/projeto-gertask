const db = require('../config/db'); 

class UsuarioModel {
  static async listarTodos() {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
  }

  static async buscarPorId(id) {
    const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async criar({ id, email, senha }) {
    const result = await db.query(
      'INSERT INTO usuarios (id, email, senha) VALUES ($1, $2, $3) RETURNING *',
      [id, email, senha]
    );
    return result.rows[0];
  }
}

module.exports = UsuarioModel;
