import React from 'react';

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
          <li>Porcentaje Vacantes DEMRE 2025</li>
        </ul>

        {/* Tabla de Porcentajes */}
        <table className="tabla-postulacion">
          <thead>
            <tr>
              <th></th>
              <th>NEM</th>
              <th>Ranking Notas</th>
              <th>Competencia Matemática 1 (M1)</th>
              <th>Competencia Matemática 2 (M2)</th>
              <th>Competencia Lectora</th>
              <th>Ciencias</th>
              <th>Historia y Ciencias Sociales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SIN M2</td>
              <td>15%</td>
              <td>25%</td>
              <td>40%</td>
              <td>NO EXIGE</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>CON M2</td>
              <td>15%</td>
              <td>20%</td>
              <td>35%</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformacionCarrera;
