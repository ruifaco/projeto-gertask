const express = require('express');
const router = express.Router();

router.get('/usuarios', (req, res) => {
  res.send('rota de usuários');
});

module.exports = router;
