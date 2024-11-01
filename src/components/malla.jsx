import React from 'react';
import mallaImage from '../assets/malla-academica.jpg'; // Asegúrate de que la ruta sea correcta

const InformacionCarrera = () => {
  return (
    <div className="informacion-carrera">
      {/* Sección de Información para Postular */}
      <div className="seccion-postulacion">
        <h2>Información para Postular</h2>
        <p>
          Aquí encontrarás los requisitos y el proceso para postular a esta carrera. 
          Debes cumplir con los puntajes mínimos requeridos, presentar la documentación
          necesaria y seguir los pasos de inscripción.
        </p>
        <ul>
          <li>Puntaje mínimo: 600</li>
          <li>Documentos requeridos: cédula de identidad, certificado de estudios</li>
          <li>Proceso de inscripción: en línea a través del portal de la universidad</li>
        </ul>
      </div>

      {/* Sección de Imagen de Malla Académica */}
      <div className="seccion-malla">
        <h2>Malla Académica</h2>
        <img src={mallaImage} alt="Malla Académica" className="malla-imagen"/>
      </div>
    </div>
  );
};

export default InformacionCarrera;
