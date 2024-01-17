import React, { useState, useEffect } from 'react';
import FileList from '../../main/FileList';
import ImageDisplay from '../imagensComp/ImageDisplay';
import NavBar from '../navBar/navBar';
const Txt2Img: React.FC = () => {
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
    <div className="CaixaTxt2img">
      <NavBar text={''} />
      <h2>{'' /* Coloque a variável correta aqui */}</h2>
      <p>Caminho da pasta: <input /></p>
      <button type="button" className="btnSalvar">Salvar</button>
      <p>Página para a listagem dos arquivos txt2img</p>
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
              {/* Exibir a imagem */}
              <img src={`http://localhost:3001/image/${file.name}`} alt={file.name} />
              <hr />
            </li>
          ))}
        </ul>
      </div>
      {/* Adicione este bloco para exibir as imagens individualmente */}

    </div>
  );
};

export default Txt2Img;
