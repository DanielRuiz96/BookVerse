import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from './CartContext';
import BookModal from './BookModal';

import book_node from '../../assets/node-book.png';
import book_react from '../../assets/react-book.png';
import book_js from '../../assets/js-book.jpeg';

const productosIniciales = [
  { id: 1, nombre: 'Libro de JavaScript', descripcion: 'Aprende JS fácil.', precio: 20, imagen: book_js },
  { id: 2, nombre: 'React para Principiantes', descripcion: 'React desde cero.', precio: 25, imagen: book_react },
  { id: 3, nombre: 'Node.js Avanzado', descripcion: 'Avanza en backend.', precio: 30, imagen: book_node },
  { id: 4, nombre: 'Libro de JavaScript', descripcion: 'Aprende JS fácil.', precio: 20, imagen: book_js },
  { id: 5, nombre: 'React para Principiantes', descripcion: 'React desde cero.', precio: 25, imagen: book_react },
  { id: 6, nombre: 'Node.js Avanzado', descripcion: 'Avanza en backend.', precio: 30, imagen: book_node },
  { id: 7, nombre: 'Libro de JavaScript', descripcion: 'Aprende JS fácil.', precio: 20, imagen: book_js },
  { id: 8, nombre: 'React para Principiantes', descripcion: 'React desde cero.', precio: 25, imagen: book_react },
  { id: 9, nombre: 'Node.js Avanzado', descripcion: 'Avanza en backend.', precio: 30, imagen: book_node },
  { id: 10, nombre: 'Node.js Avanzado', descripcion: 'Avanza en backend.', precio: 30, imagen: book_node },
];

const HomePage = () => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const estaEnCarrito = (producto) => carrito.some((item) => item.id === producto.id);

  const manejarAgregar = (producto) => {
    if (estaEnCarrito(producto)) {
      Swal.fire('Ya agregado', 'Este producto ya está en el carrito', 'info');
      return;
    }

    Swal.fire({
      title: '¿Agregar al carrito?',
      text: producto.nombre,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        agregarAlCarrito(producto);
        Swal.fire('Agregado', 'Producto agregado con éxito', 'success');
      }
    });
  };

  // Filtrar productos según el texto de búsqueda
  const productosFiltrados = productosIniciales.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2>Productos</h2>

      {/* Barra de búsqueda */}
      <div className="barra-busqueda">
        <input
          type="text"
          placeholder="Buscar libro..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="productos-lista">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <button className="btn btn-azul" onClick={() => setLibroSeleccionado(producto)}>
              Ver detalles
            </button>
            <button className="btn btn-agregar" onClick={() => manejarAgregar(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <BookModal libro={libroSeleccionado} onClose={() => setLibroSeleccionado(null)} />
    </div>
  );
};

export default HomePage;
