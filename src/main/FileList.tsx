import React, { useState, useEffect } from 'react';

interface FileMetadata {
  name: string;
  size: number;
  modifiedAt: Date;
  isDirectory: boolean;
  isFile: boolean;
  permissions: string;
  rawMetadata: Record<string, any>;
}

interface FileListProps {}

const FileList: React.FC<FileListProps> = () => {
  const [files, setFiles] = useState<FileMetadata[]>([]);

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
          <li key={index}>
            <strong>{file.name}</strong>
            <div>Tamanho: {file.size} bytes</div>
            <div>Data de Modificação: {file.modifiedAt.toString()}</div>
            <div>É um diretório? {file.isDirectory ? 'Sim' : 'Não'}</div>
            <div>É um arquivo? {file.isFile ? 'Sim' : 'Não'}</div>
            <div>Permissões: {file.permissions}</div>
            {/* Exibir UserComment se estiver presente nos metadados brutos */}
            {file.rawMetadata?.UserComment && (
              <div>
                <h4>User Comment:</h4>
                <p>{file.rawMetadata.UserComment}</p>
              </div>
            )}
            {/* Exibir todos os campos brutos */}
            <div>
              <h4>Metadados Brutos:</h4>
              <pre>{JSON.stringify(file.rawMetadata, null, 2)}</pre>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
