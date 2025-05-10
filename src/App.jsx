import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*** Layout */
import Header from './Components/layout/Header';

/*** Vistas de la aplicación */
import Login from './Components/pages/Login';
import LandingPage from './Components/pages/LandingPage';
import HomePage from './Components/pages/HomePage';
import Cart from './Components/pages/Cart';
// import BookDetail from './Components/pages/BookDetail';
import Orders from './Components/pages/Orders';
import Footer from './Components/layout/Footer';
import Register from './Components/pages/Register';
import ChangePassword from './Components/pages/ChangePassword';

import SessionTimeout from './Components/pages/SessionTimeout';

function App() {
  return (
    <Router>
      <SessionTimeout /> 
      
      <div className="contenedor-principal">
        <Header />

        <main className="main-content">
          <Routes>
            {/* Página de inicio */}
            <Route path="/" element={<LandingPage />} />

            {/* Página principal de productos */}
            <Route path="/products" element={<HomePage />} />

            {/* Página del carrito */}
            <Route path="/cart" element={<Cart />} />

            {/* Página de pedidos */}
            <Route path="/orders" element={<Orders />} />

            {/* Página de inicio de sesión */}
            <Route path="/login" element={<Login />} />
            {/* Página de registrar usuario */}
            <Route path="/register" element={<Register />} />
            {/* Página de cambiar contraseña */}
            <Route path="/changepassword" element={<ChangePassword />} />
          
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
