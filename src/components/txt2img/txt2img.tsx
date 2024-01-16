// MyComponent.tsx
import React from 'react';
import ListaDeArquivos from '../../main/FileList';
import '../txt2img/txt2img.css'

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <p>Caminho da pasta: <input/></p><button type="button" className="btnSalvar">Salvar</button>
      <p>Pagina para a listagem dos arquivos txt2img</p>
      <ListaDeArquivos/>
    </div>
  );
};

export default MyComponent;
