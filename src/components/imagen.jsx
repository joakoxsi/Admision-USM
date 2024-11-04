import React from 'react';

//carrera.toLowerCase().replace(/ /g, '-')
const CarreraImagen = ({ carrera,nombre }) => {
  // Construye la ruta a la imagen según el nombre de la carrera
  const imagePath = require(`../assets/imagen-carrera/${'arquitectura'}.jpg`);

  return (
    <div className="banner-imagen">
      <h1 className='carrera'>{nombre}</h1>
      
    </div>
  );
};

export default CarreraImagen;