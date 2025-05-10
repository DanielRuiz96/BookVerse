import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/products');
  };

  return (
    <div className="landing-container">
      <div className="overlay">
        <div className="landing-main">
          <h1 className="title">📚 BookVerse</h1>
          <p className="subtitle">Tu universo de libros, en un solo lugar</p>
          <button className="start-button" onClick={handleEnter}>
            Entrar a la Tienda
          </button>
        </div>
        <div className="features">
          <div className="feature">
            <h3>🚚 Envío rápido</h3>
            <p>Recibe tus libros en menos de 48 horas</p>
          </div>
          <div className="feature">
            <h3>📖 Gran catálogo</h3>
            <p>Ficción, ciencia, autoayuda y mucho más</p>
          </div>
          <div className="feature">
            <h3>💳 Compra segura</h3>
            <p>Paga con confianza y sin preocupaciones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
