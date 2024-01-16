import React, { useState, useEffect } from 'react';

interface FileListProps {}

// eslint-disable-next-line react/function-component-definition
const ListaDeArquivos: React.FC<FileListProps> = () => {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('http://localhost:3001/listar-arquivos');
        const data = await response.json();
        setFiles(data.files);
      } catch (error) {
        console.error('Erro ao obter a lista de arquivos', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Lista de Arquivos:</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeArquivos;
