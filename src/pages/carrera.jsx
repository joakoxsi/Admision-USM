import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { carrerasData } from "../components/carrera_data";
import CarreraImagen from "../components/imagen";
import PerfilDeIngreso from "../components/info-carrera";
import InformacionCarrera from "../components/info-ingreso";
import Mallas from "../components/malla";

export const Carrera = () => {
  const { id } = useParams();
  const [selectedSede, setSelectedSede] = useState("Valparaíso");

  const carreraInfo = carrerasData[id] ? carrerasData[id] : null;
  const sedeInfo = carreraInfo ? carreraInfo[selectedSede] : null;

  const tablaInformacion = carreraInfo
    ? [
        { informacion: "Título Profesional", valor: carreraInfo.titulo },
        { informacion: "Grado Académico", valor: carreraInfo.grado },
        {
          informacion: "Duración de los estudios",
          valor: carreraInfo.duracion,
        },
      ]
    : [];

  const tablacarrera = sedeInfo
    ? [
        { informacion: "Código", valor: sedeInfo.codigo },
        {
          informacion: "Puntaje Ponderado Mínimo de Postulación ",
          valor: carreraInfo.puntaje,
        },
        {
          informacion: "Puntaje Máximo de Selección 2024 ",
          valor: sedeInfo.max,
        },
        {
          informacion: "Puntaje Mínimo de Selección 2024 ",
          valor: sedeInfo.min,
        },
        { informacion: "Vacantes DEMRE 2025 ", valor: sedeInfo.vacantes },
      ]
    : [];

  return (
    <div>
      <div className="marco-carrera">
        <div className="contenido-carrera">
          {carreraInfo ? (
            <>
              <CarreraImagen
                carrera={carreraInfo.nombre}
                nombre={carreraInfo.nombre}
              />
              <PerfilDeIngreso
                titulo={`Perfil de la carrera: ${carreraInfo.nombre}`}
                descripcion={carreraInfo.descripcion}
                imagen={carreraInfo.imagen}
                tablaInformacion={tablaInformacion}
              />
              <InformacionCarrera tabla={tablacarrera} />
              <Mallas imagen={carreraInfo.malla} />
            </>
          ) : (
            <p>Selecciona una carrera para ver más información</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrera;
