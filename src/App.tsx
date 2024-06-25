import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ jsonData }: any) => {
  const dataString = JSON.stringify(jsonData);

  return <QRCode value={dataString} size={256} level="H" includeMargin={true} />;
};

const QRCodeGrid = () => {
  const jsonData = [
    { url: "https://www.youtube.com/watch?v=w2hGNM4l5so", id: 1,  name: 'Rowing Machine'},
    { url: "https://www.youtube.com/watch?v=OmEYcwWQxak", id: 2, name: 'Cable Machine'},
    { url: "https://www.youtube.com/watch?v=s7Imc8VI9cw", id: 3, name: 'Cable Machine Workout Full Body'},
    { url: "https://www.youtube.com/watch?v=YvFWg-oUlG8", id: 4, name: 'Lower body exercises' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '35px' }}>
      {jsonData.map((data, index) => (
        <div key={index}>
          <QRCodeGenerator jsonData={data} />
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <QRCodeGrid/>
    </>
  )
}

export default App
