import React from 'react';

interface ImageDisplayProps {
  images: ImageMetadata[];
}

interface ImageMetadata {
  name: string;
  size: number;
  modifiedAt: Date;
  isDirectory: boolean;
  isFile: boolean;
  permissions: string;
  rawMetadata: Record<string, any>;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ images }) => {
  return (
    <div>
      <h2>Image Display:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ width: 800, height: 800, margin: 10 }}>
            <img
              src={`http://localhost:3001/image/${encodeURIComponent(image.name)}`}
              alt={image.name}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
