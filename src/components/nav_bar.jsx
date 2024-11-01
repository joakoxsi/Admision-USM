import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) => {
    const classes = ["nav-bar__link"];
    if (isActive) classes.push("nav-bar__link--active");
    return classes.join(" ");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <button
        className="nav-bar__toggle"
        aria-label="Toggle menu"
        onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`nav-bar__links ${isMobileMenuOpen ? "open" : ""}`}>
        <NavLink className={navLinkClass} to="/">
          Inicio
        </NavLink>

        {/* Pregrado Submenu */}
        <div className="nav-bar__dropdown">
          <span className="nav-bar__link">Pregrado ⏷</span>
          <div className="nav-bar__dropdown-menu">
            <NavLink className={navLinkClass} to="/pregrado/programas">
              Programas de Pregrado
            </NavLink>
            <NavLink className={navLinkClass} to="/pregrado/requisitos">
              Requisitos de Ingreso
            </NavLink>
            <NavLink className={navLinkClass} to="/pregrado/postulacion">
              Proceso de Postulación
            </NavLink>
          </div>
        </div>

        {/* Postgrado Submenu */}
        <div className="nav-bar__dropdown">
          <span className="nav-bar__link">Postgrado ⏷</span>
          <div className="nav-bar__dropdown-menu">
            <NavLink className={navLinkClass} to="/postgrado/programas">
              Programas de Postgrado
            </NavLink>
            <NavLink className={navLinkClass} to="/postgrado/admision">
              Admisión Postgrado
            </NavLink>
            <NavLink className={navLinkClass} to="/postgrado/becas">
              Becas y Financiamiento
            </NavLink>
          </div>
        </div>

        <NavLink className={navLinkClass} to="/vida-universitaria">
          Vida Universitaria
        </NavLink>
        <NavLink className={navLinkClass} to="/contacto">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
