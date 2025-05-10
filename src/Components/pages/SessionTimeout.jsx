import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import useSessionTimeout from './useSessionTimeout';

const SessionTimeout = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  // Hook personalizado con la lógica que debe ejecutarse al expirar la sesión
  useSessionTimeout(() => {
    logout();           // Cierra la sesión
    navigate('/');      // Redirige al inicio
    window.location.reload(); // Refresca la página
  }, 5000); // 5 segundos de inactividad

  return null; // Este componente no renderiza nada visible
};

export default SessionTimeout;
