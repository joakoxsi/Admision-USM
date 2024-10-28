import React, { useState }  from 'react'
import CarrerasSubNav from '../components/sub_navbar';
import CarreraImagen from '../components/imagen';
import PerfilDeIngreso from '../components/info-carrera';

export const Carreras = () => {
  const [selectedCarrera, setSelectedCarrera] = useState("");
  return (
    <div>
      <CarrerasSubNav onSelectCarrera={setSelectedCarrera} />
      <div className="contenido-carrera">
        {selectedCarrera ? (
          <>
          <CarreraImagen carrera={selectedCarrera} />
          <PerfilDeIngreso />
          <p>Información sobre: {selectedCarrera}</p>
          </>
        ) : (
          
          <p>Selecciona una carrera para ver más información</p>
        )}
      </div>
    </div>
  );
};

export default Carreras
