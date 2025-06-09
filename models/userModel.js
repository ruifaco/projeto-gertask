const db = require('../config/db');

class UserModel {
  static async listarTodos() {
    const result = await db.query('SELECT id, email FROM usuarios');
    return result.rows;
  }

  static async buscarPorId(id) {
    const result = await db.query('SELECT id, email FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
  }
  
  static async buscarPorEmail(email) {
    const result = await db.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return result.rows[0];
  }

  static async criar({ email, senha }) {
    const result = await db.query(
      'INSERT INTO usuarios (email, senha) VALUES ($1, $2) RETURNING id, email',
      [email, senha]
    );
    return result.rows[0];
  }

  static async atualizar(id, { email, senha }) {
    const result = await db.query(
      `UPDATE usuarios 
      SET email = $1, senha = $2 
      WHERE id = $3 
      RETURNING id, email`,
      [email, senha, id]
    );
    return result.rows[0];
  }

  static async deletar(id) {
    const result = await db.query('DELETE FROM usuarios WHERE id = $1 RETURNING id, email', [id]);
    return result.rows[0];
  }  
}

module.exports = UserModel;