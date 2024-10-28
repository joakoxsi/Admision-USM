import React from 'react';

const CarrerasSubNav = ({ onSelectCarrera }) => {
  const carreras = [
    "Ing. Civil Ambiental", "Arquitectura", "Ing. Civil", "Ing. Civil de Minas",
    "Ing. Comercial", "Construcción Civil", "Diseño de productos", "Ing. Civil Eléctrica",
    "Ing. Civil Electrónica", "Lic. Física", "Lic. en Astrofísica", "Ing. Civil Informática",
    "Ing. Aviación Comercial", "Ing. Civil Industrial", "Ing. Civil Matemática",
    "Ing. Civil Mecánica", "Ing. Civil Metalúrgica", "Ing. Civil Química", "Ing. Civil Telemática",
    "Ingeniería en Informática"
  ];

  return (
    <div className="carreras-subnav">
      {carreras.map((carrera, index) => (
        <button key={index} onClick={() => onSelectCarrera(carrera)}>
          {carrera}
        </button>
      ))}
    </div>
  );
};

export default CarrerasSubNav;