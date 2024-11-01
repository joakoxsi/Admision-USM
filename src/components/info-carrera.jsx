import React from 'react';
import perfilImage from '../assets/light-on.png'; // Asegúrate de que la ruta sea correcta
import { carrerasData } from './carrera_data';

const PerfilDeIngreso = ({carreraid}) => {
  const carrera =carrerasData[carreraid];

  if (!carrera) {
    return <p>Carrera no encontrada</p>;
  }


  return (
    <div className="perfil-de-ingreso">
      <div className="texto-perfil">
        <h2>Perfil de Ingreso</h2>
        <p>
          El perfil de ingreso para la carrera de Ingeniería Civil Informática abarca habilidades en...{carrera.nombre}
          {/* Añade aquí la descripción completa del perfil de ingreso */}
        </p>
      </div>
      <div className="imagen-perfil">
        <img src={perfilImage} alt="Perfil de Ingreso" />
      </div>
    </div>
  );
};

export default PerfilDeIngreso;