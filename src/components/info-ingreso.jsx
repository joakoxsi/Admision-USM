import React from 'react';


const InformacionCarrera = ({ tabla }) => {
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
          <li>Porcentaje Vacantes DEMRE 2025</li>
        </ul>

        {/* Tabla de Información */}
        <table className="tabla-postulacion">
          <thead>
            <tr>
              <th>Información</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((item, index) => (
              <tr key={index}>
                <td>{item.informacion}</td>
                <td>{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformacionCarrera;
