import React from 'react';

//carrera.toLowerCase().replace(/ /g, '-')
const CarreraImagen = ({ carrera }) => {
  // Construye la ruta a la imagen según el nombre de la carrera
  const imagePath = require(`../assets/imagen-carrera/${'arquitectura'}.jpg`);

  return (
    <div className="carrera-imagen">
      <img src={imagePath} alt={carrera} />
    </div>
  );
};

export default CarreraImagen;