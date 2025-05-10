// src/components/BookModal.jsx
import React from 'react';

const BookModal = ({ libro, onClose }) => {
  if (!libro) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="cerrar" onClick={onClose}>✖</button>
        <img src={libro.imagen} alt={libro.nombre} className="modal-img" />
        <h2>{libro.nombre}</h2>
        <p><strong>Descripción:</strong> {libro.descripcion}</p>
        <p><strong>Precio:</strong> ${libro.precio}</p>
      </div>
    </div>
  );
};

export default BookModal;
