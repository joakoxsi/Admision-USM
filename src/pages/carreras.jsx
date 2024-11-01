import React, { useState }  from 'react'
import CarrerasSubNav from '../components/sub_navbar';
import CarreraImagen from '../components/imagen';
import PerfilDeIngreso from '../components/info-carrera';
import InformacionCarrera from '../components/info-ingreso';
import Mallas from '../components/malla';

export const Carreras = () => {
  const [selectedCarrera, setSelectedCarrera] = useState("");
  return (
    
    <div >
      <CarrerasSubNav onSelectCarrera={setSelectedCarrera} />
      <div className="marco-carrera">
          <div className="contenido-carrera">
            {selectedCarrera ? (
              <>

              <CarreraImagen carrera={selectedCarrera} />
              <PerfilDeIngreso carreraid={selectedCarrera}/>
              <InformacionCarrera/>
              <Mallas/>
              </>
            ) : (
              
              <p>Selecciona una carrera para ver más información</p>
            )}
          </div>
      </div>
    </div>
  );
};

export default Carreras
