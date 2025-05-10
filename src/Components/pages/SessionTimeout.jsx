import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const SessionTimeout = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    
    // Función que reinicia el temporizador de inactividad
    const resetTimer = () => {
      if (timer) clearTimeout(timer); // Limpiar cualquier temporizador previo
      timer = setTimeout(() => {
        // Si el usuario no interactúa en 30 segundos, se cierra la sesión y redirige al inicio
        logout();
        navigate('/'); // Redirige a la página de inicio
        window.location.reload();
      }, 5000); // 5 segundos
    };

    // Detecta cualquier tipo de actividad del usuario
    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Inicializar el temporizador
    resetTimer();

    // Limpieza al desmontar el componente
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer) clearTimeout(timer);
    };
  }, [logout, navigate]);

  return null; // No se renderiza nada, solo el efecto
};

export default SessionTimeout;
