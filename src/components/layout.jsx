import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home_page";

import Carreras from "../pages/carreras";

import PostulacionPage from "../pages/PostulacionPage";

import Carrera from "../pages/carrera";

import logo from "../assets/logo-usm.svg";
import NavBar from "../components/nav_bar";
import Construccion from "../pages/construccion";
import "../stylesheets/layout/layout.scss";
import Footer from "./footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="nav-header">
          <header>
            <img src={logo} className="Usm-logo" alt="logo" />
            <h1 className="layout__title">Admisión USM</h1>
          </header>
          <NavBar />
        </div>
        <main className="layout__page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/postulacion" element={<PostulacionPage />} />
            <Route path="/carrera/:id" element={<Carrera />} />
            <Route path="/construccion" element={<Construccion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
