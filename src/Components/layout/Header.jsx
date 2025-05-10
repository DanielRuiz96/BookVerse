import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/BookVerse.png';
import { UserContext } from '../pages/UserContext';

const Header = () => {
  const { usuarioActivo, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="barra">
      <div className="contenido-barra">
        <div className="logo-tienda">
          <img src={logo} alt="Logo de BookVerse" className="logo" />
        </div>
        <nav className="navegacion">
          <Link to={"/"} className="inicio">Inicio</Link>
          <Link to={"/products"} className="productos">Productos</Link>
          <Link to={"/cart"} className="carrito">Carrito</Link>
          <Link to={"/orders"} className="pedidos">Pedidos</Link>
          {!usuarioActivo ? (
            <Link to={"/login"} className="Iniciar">Iniciar Sesion</Link>
          ) : (
            <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
