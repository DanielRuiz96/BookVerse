import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));
    setUsuarioActivo(usuario);
  }, []);

  const login = (usuario) => {
    localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    setUsuarioActivo(usuario);
  };

  const logout = () => {
    localStorage.removeItem('usuarioActivo');
    setUsuarioActivo(null);
  };

  return (
    <UserContext.Provider value={{ usuarioActivo, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};



