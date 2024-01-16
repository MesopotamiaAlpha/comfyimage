// MyComponent.tsx
import React from 'react';

interface HomeCompoProps {
  text: string;
}

const HomeCompo: React.FC<HomeCompoProps> = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <h1>Inicio do projeto</h1>
    </div>
  );
};

export default HomeCompo;
