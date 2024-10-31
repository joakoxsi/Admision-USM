import React from "react";
import "../stylesheets/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2024 Universidad Técnica Federico Santa María</p>
        <nav className="footer__nav">
          <a href="/privacy-policy" className="footer__link">
            Política de Privacidad
          </a>
          <a href="/terms-of-service" className="footer__link">
            Términos de Servicio
          </a>
          <a href="/contact" className="footer__link">
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;