import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from './UserContext'; // Asegúrate de que la ruta esté correcta

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const { login } = useContext(UserContext); // Usar 'login' en lugar de 'setUsuarioActivo'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuariosRegistrados.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );

    if (usuarioValido) {
      login(usuarioValido); // Usamos 'login' desde el contexto para actualizar el usuario
      Swal.fire('¡Login exitoso!', '', 'success').then(() => {
        navigate('/products');
      });
    } else {
      Swal.fire('Credenciales incorrectas', '', 'error');
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Iniciar sesión</button>
      </form>

      <div className="auth-links">
        <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
        <p>¿Olvidaste tu contraseña? <Link to="/changepassword">Cambiar contraseña</Link></p>
      </div>
    </div>
  );
};

export default Login;
