import React, { useState } from 'react';

// Datos de carreras con sus IDs
const carrerasMapping = {
    "Arquitectura": 1,
    "Construcción Civil": 2,
    "Ingeniería Civil": 3,
    "Ingeniería Civil Ambiental": 4,
    "Ingeniería Civil de Minas": 5,
    "Ingeniería Civil Eléctrica": 6,
    "Ingeniería Civil Electrónica":7,
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
    "Ingeniería de Ejecución en Software":28,
    "Ingeniería de Ejecución en Control e Instrumentación Industrial":29,
    "Ingeniería de Ejecución en Gestión Industrial":30,
    "Ingeniería Comercial – ICV":31
}

// Datos de carreras por sede y modo
const carrerasPorSede = {
    "Diurno": {
        "Valparaíso": ["Arquitectura", "Construcción Civil", "Ingeniería Civil", "Ingeniería Civil Ambiental", "Ingeniería Civil Eléctrica","Ingeniería Civil Electrónica",'Ingeniería Civil Física','Ingeniería Civil Informática','Ingeniería Civil Matemática','Ingeniería Comercial',"Licenciatura en Astrofísica"],
        "San_Joaquín": ["Arquitectura", "Ingeniería Civil", "Ingeniería Civil de Minas", "Ingeniería Civil Eléctrica",'Ingeniería Civil Física',"Ingeniería Civil Informática",'Ingeniería Civil Matemática','Licenciatura en Astrofísica'],
        "Vitacura": ["Ingeniería Civil Industrial",'Ingeniería Comercial',"Ingeniería en Aviación Comercial","Técnico Universitario en Administración de Empresas"],
        "Concepción": ["Ingeniería en Informática", "Ingeniería en Mantenimiento Industrial",'Ingeniería en Prevención de Riesgos Laborales y Ambientales',"Técnico Universitario en Administración de Empresas"],
        "Viña del Mar":["Ingeniería en Mantenimiento Industrial",'Ingeniería en Prevención de Riesgos Laborales y Ambientales',"Técnico Universitario en Administración de Empresas"],
    },
    "Vespertino": {
        "Valparaíso": ["Ingeniería Civil Industrial", "Ingeniería Comercial– ICV"],
        "San_Joaquín": ["Ingeniería de Ejecución en Gestión Industrial", "Ingeniería de Ejecución en Software"],
        "Vitacura": ["Ingeniería Civil Industrial","Ingeniería Comercial–ICV"],
        "Concepción": ["Ingeniería de Ejecución en Gestión Industrial", "Ingeniería Comercial– ICV","Ingeniería de Ejecución en Control e Instrumentación Industrial"],
        "Viña del Mar":["Ingeniería de Ejecución en Gestión Industrial","Ingeniería de Ejecución en Control e Instrumentación Industrial"],
    }
};

const CarrerasSubNav = ({ onSelectCarrera, onSelectSede }) => {
    const [modo, setModo] = useState('Diurno');
    const [sede, setSede] = useState('Valparaíso');
    const [selectedCarrera, setSelectedCarrera] = useState(null); // Estado para la carrera seleccionada

    // Obtener las carreras según el modo y la sede
    const carreras = carrerasPorSede[modo][sede] || [];
    

    
    
    


    return (
        <div className="carreras-subnav">
            <h2 className="titulo">Selecciona una opción</h2>
            <div className="modo-selector">
                <div className={`modo-tarjeta ${modo === 'Diurno' ? 'activo' : ''}`} onClick={() => setModo('Diurno')}>
                    Diurno
                </div>
                <div className={`modo-tarjeta ${modo === 'Vespertino' ? 'activo' : ''}`} onClick={() => setModo('Vespertino')}>
                    Vespertino
                </div>
            </div>
            <div className="sede-selector">
                <label>Selecciona Sede:</label>
                <div className="sede-tarjetas">
                    {Object.keys(carrerasPorSede[modo]).map((sedeKey) => (
                        <div 
                            key={sedeKey} 
                            className={`sede-tarjeta ${sede === sedeKey ? 'activo' : ''}`} 
                            onClick={() => setSede(sedeKey)}
                        >
                            {sedeKey}
                        </div>
                    ))}
                </div>
            </div>
            <div className="carreras-lista">
                <h3>Carreras disponibles:</h3>
                <div className="carreras-container">
                    {carreras.map((carrera) => (
                        <div 
                            key={carrera} 
                            className={`carrera-item ${selectedCarrera === carrera ? 'selected' : ''}`} 
                            onClick={() => {
                                const id = carrerasMapping[carrera];
                                if (id) {
                                    onSelectCarrera(id);
                                }
                                setSelectedCarrera(carrera); // Actualiza la carrera seleccionada
                            }}
                        >
                            {carrera}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarrerasSubNav;

