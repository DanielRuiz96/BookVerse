import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenaActual, setContrasenaActual] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios registrados desde localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar el usuario por su nombre y validar la contraseña actual
    const usuarioValido = usuariosRegistrados.find(
      (u) => u.usuario === usuario && u.contrasena === contrasenaActual
    );

    if (usuarioValido) {
      // Si las credenciales son correctas, actualizar la contraseña
      usuarioValido.contrasena = nuevaContrasena;

      // Guardar los usuarios con la nueva contraseña en localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

      Swal.fire('Contraseña cambiada con éxito', '', 'success').then(() => {
        navigate('/login');
      });
    } else {
      Swal.fire('Error', 'Usuario o contraseña actual incorrecta', 'error');
    }
  };

  return (
    <div className="auth-container">
      <h2>Cambiar Contraseña</h2>
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
          <label>Contraseña Actual</label>
          <input
            type="password"
            value={contrasenaActual}
            onChange={(e) => setContrasenaActual(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Nueva Contraseña</label>
          <input
            type="password"
            value={nuevaContrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Cambiar Contraseña</button>
      </form>
    </div>
  );
};

export default ChangePassword;
