import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [pedidos, setPedidos] = useState([]);  // Cambiamos para guardar múltiples pedidos

  // Función para agregar al carrito
  const agregarAlCarrito = (producto) => {
    // Verifica si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);
  
    if (productoExistente) {
      // Si ya está, aumenta la cantidad
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      // Si no está, agrégalo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  // Función para editar la cantidad
  const editarCantidad = (id, cantidad) => {
    setCarrito(carrito.map(item =>
      item.id === id ? { ...item, cantidad } : item
    ));
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Función para guardar el pedido (agregar al historial de pedidos)
  const guardarPedido = (nuevoPedido) => {
    setPedidos([...pedidos, nuevoPedido]);  // Agrega el nuevo pedido a la lista de pedidos
  };

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      eliminarDelCarrito,
      editarCantidad,
      vaciarCarrito,
      setPedido: guardarPedido,  // Usamos setPedido para agregar un pedido al historial
      pedidos
    }}>
      {children}
    </CartContext.Provider>
  );
};
