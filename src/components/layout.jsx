import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home_page";

import Carreras from "../pages/carreras";

import logo from "../assets/logo-usm.svg";
import NavBar from "../components/nav_bar";
import "../stylesheets/layout/layout.css";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <header>
          <img src={logo} className="Usm-logo" alt="logo" />
          <h1 className="layout__title">Admisión USM</h1>
        </header>
        <NavBar />
        <div className="layout__page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carreras" element={<Carreras />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
