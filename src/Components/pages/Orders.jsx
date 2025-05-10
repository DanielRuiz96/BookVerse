import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { pedidos } = useContext(CartContext);

  return (
    <div className="order">
      <h2>Resumen de Pedidos</h2>
      {pedidos.length === 0 ? (
        <p>No tienes pedidos aún.</p>
      ) : (
        pedidos.map((pedido, index) => (
          <div key={index} className="order-items">
            <h3>Pedido #{index + 1} - Fecha: {pedido.fecha}</h3>
            <ul>
              {pedido.productos.map((item) => (
                <li key={item.id} className="order-item">
                  {item.nombre} x{item.cantidad} - ${item.precio * item.cantidad}
                </li>
              ))}
            </ul>
            <div className="order-total">Total: ${pedido.total}</div>
          </div>
        ))
      )}
      <Link to="/cart" className="btn-regresar">Regresar al carrito</Link>
    </div>
  );
};

export default Orders;
