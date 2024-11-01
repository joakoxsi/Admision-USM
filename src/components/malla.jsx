import React from 'react';
import mallaImage from '../assets/malla/INGENIERIA-CIVIL-AMBIENTAL-1.webp'; // Asegúrate de que la ruta sea correcta

const Malla =() => {
    return(
        <div className="seccion-malla">
        <h2>Malla Académica</h2>
        <img src={mallaImage} alt="Malla Académica" className="malla-imagen"/>
      </div>



    )

}
export default Malla