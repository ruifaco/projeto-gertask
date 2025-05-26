require("dotenv").config();
const express = require("express");
const path = require("path"); 
const pool = require("./config/db"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "public")));

const apiRoutes = require('./routes/index');
app.use('/api', apiRoutes);

const frontendRoutes = require("./routes/frontRoutes");
app.use("/", frontendRoutes);
app.use((req, res, next) => {
  res.status(404).render(path.join(__dirname, "views/pages/404"), { pageTitle: "Não Encontrado" }); 
});

app.use((err, req, res, next) => {
  console.error("ERRO DETECTADO:", err.stack);
  res.status(500).render(path.join(__dirname, "views/pages/500"), { pageTitle: "Erro no Servidor" }); 

});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados na inicialização:', err);
  } else {
    console.log('Conexão com o banco de dados PostgreSQL verificada com sucesso. Hora do DB:', res.rows[0].now);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Páginas do frontend em http://localhost:${PORT}`);
      console.log(`API em http://localhost:${PORT}/api`);
    });
  }
});

