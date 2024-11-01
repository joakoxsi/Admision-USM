import React from "react";
const carreras  = {
  "Arquitectura": 1,
  "Ing. Civil": 3,
  "Ing. Civil de Minas": 5,
  "Ing. Comercial": 5,
  "Construcción Civil": 2,
  "Diseño de productos": 20,
  "Ing. Civil Eléctrica": 8,
  "Ing. Civil Electrónica": 9,
  "Lic. Física": 10,
  "Lic. en Astrofísica": 11,
  "Ing. Civil Informática": 12,
  "Ing. Aviación Comercial": 13,
  "Ing. Civil Industrial": 14,
  "Ing. Civil Matemática": 15,
  "Ing. Civil Mecánica": 16,
  "Ing. Civil Metalúrgica": 17,
  "Ing. Civil Química": 18,
  "Ing. Civil Telemática": 19,
  "Ingeniería en Informática": 20,
  "Ingeniería en Biotecnología": 21,
  "Ingeniería en Diseño de Productos": 22,
  "Ingeniería en Fabricación y Diseño Industrial": 23,
  "Ingeniería en Prevención de Riesgos Laborales y Ambientales": 24,
  "Licenciatura en Astrofísica": 25,
  "Licenciatura en Ciencias, mención Química": 26,
  "Licenciatura en Física": 27,
};

/*

  "Química": 28,
  "Técnico Universitario Dibujante Proyectista": 29,
  "Técnico Universitario en Administración de Empresas": 30,
  "Técnico Universitario en Alimentos": 31,
  "Técnico Universitario en Automatización y Control": 32,
  "Técnico Universitario en Biotecnología": 33,
  "Técnico Universitario en Ciencia de Datos": 34 


*/
const CarrerasSubNav = ({ onSelectCarrera }) => {
  return (
    <div className="carreras-subnav">
      {Object.keys(carreras).map((carrera) => (
        <button key={carreras[carrera]} onClick={() => onSelectCarrera(carreras[carrera])}>
          {carrera}
        </button>
      ))}
    </div>
  );
};

export default CarrerasSubNav;
