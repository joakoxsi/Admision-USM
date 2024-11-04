import React, { useState }  from 'react'
import CarrerasSubNav from '../components/sub_navbar';
import { carrerasData } from '../components/carrera_data';
import CarreraImagen from '../components/imagen';
import PerfilDeIngreso from '../components/info-carrera';
import InformacionCarrera from '../components/info-ingreso';
import Mallas from '../components/malla';

export const Carreras = () => {
  const [selectedCarrera, setSelectedCarrera] = useState("");
  const [selectedSede, setSelectedSede] = useState("Valparaíso");
  const carreraInfo = selectedCarrera && carrerasData[selectedCarrera] ? carrerasData[selectedCarrera] : null;
  const sedeInfo = carreraInfo ? carreraInfo[selectedSede] : null;

  const tablaInformacion = carreraInfo ? [
    { informacion: 'Título Profesional', valor: carreraInfo.titulo },
    { informacion: 'Grado Académico', valor: carreraInfo.grado},
    { informacion: 'Duración de los estudios', valor:carreraInfo.duracion },
    // Agrega más datos según sea necesario
  ] : [];;

   
  const tablacarrera = sedeInfo ? [
    { informacion: 'Código', valor: sedeInfo.codigo },
    { informacion: 'Puntaje Ponderado Mínimo de Postulación ', valor:carreraInfo.puntaje },
    { informacion: 'Puntaje Máximo de Selección 2024 ', valor:sedeInfo.max },
    { informacion: 'Puntaje Mínimo de Selección 2024 ', valor:sedeInfo.min },
    { informacion: 'Vacantes DEMRE 2025 ', valor:sedeInfo.vacantes },
    // Agrega más datos según sea necesario
  ] : [];;

  
  const handleSelectSede = (sede) => {
    setSelectedSede(sede);
  };
  
  console.log('Carrera seleccionada:', selectedCarrera); // Debugging
  // Debugging
  //console.log('Código:', sedeInfo.codigo);

  console.log('Tabla:', carreraInfo);
  return (
    <div >
      <CarrerasSubNav onSelectCarrera={setSelectedCarrera} 
onSelectSede={handleSelectSede}/>

      <div className="marco-carrera">
          <div className="contenido-carrera">
            {carreraInfo ? (
              <>
              <CarreraImagen 
              carrera={selectedCarrera} 
              nombre={carreraInfo.nombre}
              />
              <PerfilDeIngreso
                titulo={`Perfil de la carrera: ${carreraInfo.nombre}`}
                descripcion={carreraInfo.descripcion}
                imagen={carreraInfo.imagen}
                tablaInformacion={tablaInformacion}
              />
              <InformacionCarrera tabla={tablacarrera}/>
              <Mallas imagen={carreraInfo.malla}/>
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
