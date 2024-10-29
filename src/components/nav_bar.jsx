import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ["nav-bar__link"];
    if (isActive) classes.push("nav-bar__link--active");
    return classes.join(" ");
  };
  return (
    <nav className="nav-bar">
      <NavLink className={navLinkClass} to="/">
        Inicio
      </NavLink>
      <NavLink className={navLinkClass} to="/carreras">
        Pregrado
      </NavLink>
      <NavLink
        className={navLinkClass}
        to="https://postgrado.usm.cl/programas/">
        Postgrado
      </NavLink>
      <NavLink className={navLinkClass} to="https://educacioncontinua.usm.cl/">
        Eduación Continua
      </NavLink>
    </nav>
  );
};

export default NavBar;
