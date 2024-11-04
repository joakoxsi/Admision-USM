import React from 'react'; // Asegúrate de que la ruta sea correcta

const PerfilCarrera = ({ titulo, descripcion, imagen, tablaInformacion }) => {
  const imagePath = require(`../assets/${imagen}`)
  return (
    <div className="perfil-carrera">
      <div className="perfil-seccion">
        <h2 className='titulo-perfil'>{titulo}</h2>
        <p className='descri-perfil'>{descripcion}</p>
      </div>
      <div className="contedor">
        
       </div>
      <div className="imagen-seccion">
        <img src={imagePath} alt="Perfil" 
        style={{ maxWidth: '60%', height: 'auto' }}
        />
      </div>

      <div className="tabla-seccion">
        <div> 
          <h4>Tabla con información</h4>
          <table>
            <tbody>
              {tablaInformacion.map((item, index) => (
                <tr key={index}>
                  <td>{item.informacion}</td>
                  <td>{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div>
    </div>
  );
};

export default PerfilCarrera;
