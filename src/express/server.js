const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const exiftool = require('exiftool-vendored').exiftool;

const app = express();
const PORT = 3001;

const directoryPath = path.join(__dirname, '../../pastaTeste');

app.use(cors());

app.get('/listar-arquivos', async (req, res) => {
  try {
    const files = await fs.readdir(directoryPath);
    const filesWithMetadata = [];

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = await fs.stat(filePath);

      let rawMetadata = {};

      if (stats.isFile() && path.extname(file).toLowerCase() === '.jpg') {
        rawMetadata = await getRawMetadata(filePath);
      }

      filesWithMetadata.push({
        name: file,
        size: stats.size,
        modifiedAt: stats.mtime,
        isDirectory: stats.isDirectory(),
        isFile: stats.isFile(),
        permissions: stats.mode.toString(8),
        rawMetadata: rawMetadata,
      });
    }

    res.json({ files: filesWithMetadata });
  } catch (error) {
    console.error('Erro ao listar arquivos:', error);
    res.status(500).json({ error: 'Erro ao listar arquivos' });
  }
});

app.get('/image/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(directoryPath, imageName);

  // Adapte o tipo de conteúdo com base no tipo de imagem que você está servindo
  res.sendFile(imagePath);
});

async function getRawMetadata(filePath) {
  try {
    const result = await exiftool.read(filePath);
    return result;
  } catch (error) {
    console.error('Erro ao obter metadados brutos do arquivo:', error);
    return {};
  }
}

app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
