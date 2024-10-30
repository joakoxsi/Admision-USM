import React from "react";
import headerImage from "../assets/admision-directo.jpg"; // Ejemplo de imagen de estudiante
import scholarshipsImage from "../assets/beneficio.jpg";
import ImageArqui from "../assets/imagen-carrera/casa-central-arquitectura.w2000.jpg";
import ImageInfo from "../assets/imagen-carrera/casa-central-ingenieria-civil-informatica.w700.jpg";
import ImageComercial from "../assets/imagen-carrera/Ing.-Comercial.jpg";
import "../stylesheets/home_page.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Sección Hero / Bienvenida */}
      <header className="home-page__hero">
        <div className="home-page__hero-overlay">
          <img
            src={headerImage}
            alt="Welcome to USM"
            className="home-page__hero-image"
          />
          <div className="home-page__hero-text">
            <h1>Bienvenidos a Admisión USM</h1>
            <p>
              Descubre todas las oportunidades que la Universidad Técnica
              Federico Santa María tiene para ti.
            </p>
            <button className="home-page__cta-button">
              Explora Nuestras Carreras
            </button>
          </div>
        </div>
      </header>

      {/* Sección de Próximos Eventos */}
      <section className="home-page__events">
        <h2>Próximos Eventos y Fechas Importantes</h2>
        <div className="home-page__events-cards">
          <div className="event-card">
            <h3>Charla Informativa</h3>
            <p>15 de Noviembre, 2024</p>
            <p>
              Descubre los programas de pregrado en nuestra sesión informativa.
            </p>
          </div>
          <div className="event-card">
            <h3>Inicio de Postulaciones</h3>
            <p>1 de Diciembre, 2024</p>
            <p>
              Abre la primera convocatoria para el proceso de admisión 2025.
            </p>
          </div>
          <div className="event-card">
            <h3>Tour del Campus</h3>
            <p>7 de Enero, 2025</p>
            <p>Ven a conocer nuestro campus y vive la experiencia USM.</p>
          </div>
        </div>
      </section>

      {/* Sección de Programas Destacados */}
      <section className="home-page__programs">
        <h2>Programas Destacados</h2>
        <div className="home-page__programs-cards">
          <div className="program-card">
            <img
              src={ImageInfo}
              alt="Ingeniería Civil Informática"
              className="program-card__image"
            />
            <h3>Ingeniería Civil Informática</h3>
            <p>
              Conoce el programa de Ingeniería Civil Informática y sus
              oportunidades.
            </p>
            <button>Ver Programa</button>
          </div>
          <div className="program-card">
            <img
              src={ImageArqui}
              alt="Arquitectura"
              className="program-card__image"
            />
            <h3>Arquitectura</h3>
            <p>
              Explora la carrera de Arquitectura en la USM y su enfoque
              innovador.
            </p>
            <button>Ver Programa</button>
          </div>
          <div className="program-card">
            <img
              src={ImageComercial}
              alt="Ingeniería Comercial"
              className="program-card__image"
            />
            <h3>Ingeniería Comercial</h3>
            <p>
              Descubre cómo Ingeniería Comercial puede abrirte puertas en el
              mundo empresarial.
            </p>
            <button>Ver Programa</button>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="home-page__testimonials">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <div className="home-page__testimonials-cards">
          <div className="testimonial-card">
            <p className="testimonial-card__quote">
              "La USM me ha dado las herramientas para crecer profesional y
              personalmente."
            </p>
            <p className="testimonial-card__author">
              - Camila, Ingeniería Civil Electrónica
            </p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-card__quote">
              "Aquí encontré un ambiente colaborativo y de gran calidad
              académica."
            </p>
            <p className="testimonial-card__author">
              - Juan, Ingeniería Civil en Minas
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Becas y Beneficios con Imagen de Fondo */}
      <section
        className="home-page__scholarships"
        style={{ backgroundImage: `url(${scholarshipsImage})` }}>
        <h2>Becas y Beneficios</h2>
        <p>
          Explora las opciones de financiamiento disponibles para nuestros
          estudiantes.
        </p>
        <button className="home-page__scholarships-button">
          Conoce Todas las Becas
        </button>
      </section>

      {/* Sección de Preguntas Frecuentes con Imagen Decorativa */}
      <section className="home-page__faq">
        <h2>Preguntas Frecuentes</h2>
        <p>
          Resuelve tus dudas más comunes sobre el proceso de admisión en la USM.
        </p>
        <button className="home-page__faq-button">Preguntas Frecuentes</button>
      </section>
    </div>
  );
};

export default HomePage;
