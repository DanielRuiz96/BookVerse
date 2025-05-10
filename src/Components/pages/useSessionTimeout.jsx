import { useEffect } from 'react';

const useSessionTimeout = (onTimeout, timeout = 30000) => {
  useEffect(() => {
    let timer;

    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        onTimeout(); // Acción al expirar el tiempo
      }, timeout);
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // Inicializa el temporizador

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer) clearTimeout(timer);
    };
  }, [onTimeout, timeout]);
};

export default useSessionTimeout;
