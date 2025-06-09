const express = require('express');
const app = express();
const path = require('path');
const usuariosRoutes = require('./routes/usuarios');
const tasksRoutes = require('./routes/tasks');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', usuariosRoutes);
app.use('/', tasksRoutes); 

app.get('/', (req, res) => {
  res.redirect('/tarefas');
});


// configurando EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
