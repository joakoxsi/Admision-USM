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
            <NavLink className={navLinkClass} to="/carreras">
              Programas de Pregrado
            </NavLink>
            <NavLink className={navLinkClass} to="/construccion">
              Proceso de Postulación
            </NavLink>
          </div>
        </div>

        {/* Postgrado Submenu */}
        <div className="nav-bar__dropdown">
          <span className="nav-bar__link">Postgrado ⏷</span>
          <div className="nav-bar__dropdown-menu">
            <NavLink className={navLinkClass} to="/construccion">
              Programas de Postgrado
            </NavLink>
            <NavLink className={navLinkClass} to="/construccion">
              Admisión Postgrado
            </NavLink>
            <NavLink className={navLinkClass} to="/construccion">
              Becas y Financiamiento
            </NavLink>
          </div>
        </div>

        <NavLink className={navLinkClass} to="/construccion">
          Vida Universitaria
        </NavLink>
        <NavLink className={navLinkClass} to="/construccion">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
