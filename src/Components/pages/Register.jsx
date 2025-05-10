import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find((u) => u.usuario === usuario)) {
      Swal.fire('Error', 'El usuario ya existe', 'error');
      return;
    }

    usuarios.push({ usuario, contrasena });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    Swal.fire('Registrado correctamente', '', 'success').then(() => {
      navigate('/login');
    });

    setUsuario('');
    setContrasena('');
  };

  return (
    <div className="auth-container">
      <h2>Registro de usuario</h2>
      <form onSubmit={handleRegistro}>
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
        <button type="submit" className="btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
