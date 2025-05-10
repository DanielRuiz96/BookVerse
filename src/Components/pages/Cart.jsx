import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import { CartContext } from './CartContext';

const Cart = () => {
  const { carrito, eliminarDelCarrito, editarCantidad, vaciarCarrito, setPedido } = useContext(CartContext);
  const navigate = useNavigate();

  // Estado para el total de la compra
  const [total, setTotal] = useState(0);

  // Verificamos si el usuario está autenticado
  const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

  // Calcular el total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, item) => {
      const precio = parseFloat(item.precio);
      const cantidad = parseInt(item.cantidad);

      // Asegurarse de que el precio y la cantidad sean números válidos
      if (!isNaN(precio) && !isNaN(cantidad)) {
        return total + (precio * cantidad);
      }
      return total;
    }, 0);
  };

  // Actualizar el total cada vez que el carrito cambie
  useEffect(() => {
    setTotal(calcularTotal());
  }, [carrito]); // Solo se ejecuta cuando 'carrito' cambia

  // Manejar la finalización del pedido
  const finalizarCompra = () => {
    if (!usuarioActivo) {
      // Si no hay usuario autenticado, redirigir al login
      navigate('/login');
    } else {
      Swal.fire({
        title: '¿Estás seguro de que quieres proceder con el pago?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, proceder',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Crear un resumen del pedido (con datos del carrito)
          const resumenPedido = {
            productos: carrito,
            total: total.toFixed(2),
            fecha: new Date().toLocaleString(),
          };

          // Guardar el resumen del pedido
          setPedido(resumenPedido); // Guardamos el resumen del pedido en el historial
          vaciarCarrito(); // Limpiamos el carrito

          // Mostrar alerta de éxito
          Swal.fire('¡Compra realizada con éxito!', 'Gracias por tu compra.', 'success').then(() => {
            navigate('/orders'); // Redirigir a la página de orders
          });
        }
      });
    }
  };

  return (
    <div className="carrito">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        carrito.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.nombre}</h4>
            <p>${item.precio}</p>
            <p>
              Cantidad:
              <input
                type="number"
                value={item.cantidad || 1} // Establecer la cantidad correctamente si es vacía
                min="1"
                onChange={(e) => editarCantidad(item.id, parseInt(e.target.value))}
              />
            </p>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        ))
      )}

      {/* Mostrar el total de la compra */}
      {carrito.length > 0 && (
        <div className="total-compra">
          <h3>Total: ${total.toFixed(2)}</h3> {/* Usamos el total calculado en el estado */}
        </div>
      )}

      {/* Solo mostrar el botón si hay productos en el carrito */}
      {carrito.length > 0 && (
        <button className="finalizar-compra" onClick={finalizarCompra}>
          {usuarioActivo ? 'Finalizar compra' : 'Inicia sesión para finalizar el pago'}
        </button>
      )}
    </div>
  );
};

export default Cart;
