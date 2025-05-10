// services/userService.js

const db = require("../config/db");

// Função para obter todos os usuários
const getAllUsers = async () => {
  try {
    const result = await db.query("SELECT * FROM usuarios");
    return result.rows;
  } catch (error) {
    throw new Error("Erro ao obter usuários: " + error.message);
  }
};

// Função para obter um usuário por ID
const getUserById = async (id) => {
  try {
    const result = await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Erro ao obter usuário: " + error.message);
  }
};

// Função para criar um novo usuário
const createUser = async (name, email) => {
  try {
    const result = await db.query(
      "INSERT INTO usuarios (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Erro ao criar usuário: " + error.message);
  }
};

// Função para atualizar um usuário por ID
const updateUser = async (id, name, email) => {
  try {
    const result = await db.query(
      "UPDATE usuarios SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Erro ao atualizar usuário: " + error.message);
  }
};

// Função para deletar um usuário por ID
const deleteUser = async (id) => {
  try {
    const result = await db.query(
      "DELETE FROM usuarios WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error("Erro ao deletar usuário: " + error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
