const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());

app.get('/listar-arquivos', (req, res) => {
  const directoryPath = path.join(__dirname, '../../pastaTeste');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao listar arquivos' });
    }

    res.json({ files });
  });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Recebido sinal de interrupção. Encerrando o servidor.');
  server.close(() => {
    console.log('Servidor encerrado.');
    process.exit(0);
  });
});
