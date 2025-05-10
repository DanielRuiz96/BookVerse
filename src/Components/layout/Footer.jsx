import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>BookVerse</p>
      <div className="redes-sociales">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> {/* Ícono de Facebook */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> {/* Ícono de Twitter */}
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Ícono de Instagram */}
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2025 BookVerse. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
