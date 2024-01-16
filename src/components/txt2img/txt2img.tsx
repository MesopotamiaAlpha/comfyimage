// MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  text: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <p>This is my custom TypeScript component!</p>
    </div>
  );
};

export default MyComponent;
