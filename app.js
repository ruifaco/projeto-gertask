const express = require('express');
const app = express();

// middleware de rotas
const usuariosRoutes = require('./routes/usuarios');
app.use('/', usuariosRoutes);

// subir servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});