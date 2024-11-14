import React, { useState } from "react";
import "../stylesheets/sub-navbar/sub_navbar.scss";

// Datos de carreras con sus IDs
const carrerasMapping = {
  Arquitectura: 1,
  "Construcción Civil": 2,
  "Ingeniería Civil": 3,
  "Ingeniería Civil Ambiental": 4,
  "Ingeniería Civil de Minas": 5,
  "Ingeniería Civil Eléctrica": 32,
  "Ingeniería Civil Electrónica": 6,
  "Ingeniería Civil Física": 8,
  "Ingeniería Civil Industrial": 9,
  "Ingeniería Civil Informática": 10,
  "Ingeniería Civil Matemática": 11,
  "Ingeniería Comercial": 17,
  "Ingeniería en Aviación Comercial": 18,
  "Ingeniería en Informática": 22,
  "Ingeniería en Mantenimiento Industrial": 23,
  "Ingeniería en Prevención de Riesgos Laborales y Ambientales": 24,
  "Licenciatura en Astrofísica": 25,
  "Técnico Universitario en Administración de Empresas": 18,
  "Ingeniería de Ejecución en Software": 28,
  "Ingeniería de Ejecución en Control e Instrumentación Industrial": 29,
  "Ingeniería de Ejecución en Gestión Industrial": 30,
  "Ingeniería Comercial – ICV": 31,
};

// Datos de carreras por sede y modo
const carrerasPorSede = {
  Diurno: {
    Valparaíso: [
      "Arquitectura",
      "Construcción Civil",
      "Ingeniería Civil",
      "Ingeniería Civil Ambiental",
      "Ingeniería Civil Eléctrica",
      "Ingeniería Civil Electrónica",
      "Ingeniería Civil Física",
      "Ingeniería Civil Informática",
      "Ingeniería Civil Matemática",
      "Ingeniería Comercial",
      "Licenciatura en Astrofísica",
    ],
    San_Joaquín: [
      "Arquitectura",
      "Ingeniería Civil",
      "Ingeniería Civil de Minas",
      "Ingeniería Civil Eléctrica",
      "Ingeniería Civil Física",
      "Ingeniería Civil Informática",
      "Ingeniería Civil Matemática",
      "Licenciatura en Astrofísica",
    ],
    Vitacura: [
      "Ingeniería Civil Industrial",
      "Ingeniería Comercial",
      "Ingeniería en Aviación Comercial",
      "Técnico Universitario en Administración de Empresas",
    ],
    Concepción: [
      "Ingeniería en Informática",
      "Ingeniería en Mantenimiento Industrial",
      "Ingeniería en Prevención de Riesgos Laborales y Ambientales",
      "Técnico Universitario en Administración de Empresas",
    ],
    "Viña del Mar": [
      "Ingeniería en Mantenimiento Industrial",
      "Ingeniería en Prevención de Riesgos Laborales y Ambientales",
      "Técnico Universitario en Administración de Empresas",
    ],
  },
  Vespertino: {
    Valparaíso: ["Ingeniería Civil Industrial", "Ingeniería Comercial – ICV"],
    San_Joaquín: [
      "Ingeniería de Ejecución en Gestión Industrial",
      "Ingeniería de Ejecución en Software",
    ],
    Vitacura: ["Ingeniería Civil Industrial", "Ingeniería Comercial – ICV"],
    Concepción: [
      "Ingeniería de Ejecución en Gestión Industrial",
      "Ingeniería Comercial – ICV",
      "Ingeniería de Ejecución en Control e Instrumentación Industrial",
    ],
    "Viña del Mar": [
      "Ingeniería de Ejecución en Gestión Industrial",
      "Ingeniería de Ejecución en Control e Instrumentación Industrial",
    ],
  },
};

const CarrerasSubNav = ({ onSelectCarrera, onSelectSede }) => {
  const [modo, setModo] = useState("Diurno");
  const [sede, setSede] = useState(onSelectSede || "Valparaíso");
  const [selectedCarrera, setSelectedCarrera] = useState("");

  // Obtener las carreras según el modo y la sede
  const carreras = carrerasPorSede[modo][sede] || [];

  return (
    <div className="carreras-subnav">
      <h2 className="titulo-filtro">Filtrar Carreras</h2>
      <div className="selector-container">
        <div className="modo-selector">
          <button
            className={`modo-btn ${modo === "Diurno" ? "activo" : ""}`}
            onClick={() => setModo("Diurno")}>
            Diurno
          </button>
          <button
            className={`modo-btn ${modo === "Vespertino" ? "activo" : ""}`}
            onClick={() => setModo("Vespertino")}>
            Vespertino
          </button>
        </div>
        <select
          value={sede}
          onChange={(e) => {
            const newSede = e.target.value;
            setSede(newSede);
            onSelectSede(newSede);
          }}
          className="sede-dropdown">
          <option value="">Selecciona Sede</option>
          {Object.keys(carrerasPorSede[modo]).map((sedeKey) => (
            <option key={sedeKey} value={sedeKey}>
              {sedeKey}
            </option>
          ))}
        </select>
        <select
          value={selectedCarrera}
          onChange={(e) => {
            const carrera = e.target.value;
            const id = carrerasMapping[carrera];
            if (id) onSelectCarrera(id);
            setSelectedCarrera(carrera);
          }}
          className="carreras-dropdown">
          <option value="" disabled>
            Selecciona Carrera
          </option>
          {carreras.map((carrera) => (
            <option key={carrera} value={carrera}>
              {carrera}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarrerasSubNav;
