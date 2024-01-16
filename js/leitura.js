const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, './'); // substitua pelo caminho da sua pasta

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Erro ao listar arquivos:', err);
    return;
  }

  console.log('Lista de arquivos:');
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });
});

//arqivo para ser rodado em node separado, o arquivo que esta listando é o dentro da pasta express server.js
