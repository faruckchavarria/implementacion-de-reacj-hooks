
import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
function App() {
  //state de productos
  const [productos, guardarProductos] = useState([
  {id:1, nombre:'camisa',precio:50},
  {id:2, nombre:'pantalon',precio:40},
  {id:3, nombre:'zapatos',precio:30},
  {id:4, nombre:'gorra',precio:60}]);

//state para guardar carrito
const [carrito,agregarProducto] = useState([]);


  const fecha = new Date().getFullYear();
  return (
    <Fragment>

    <Header titulo="Inicio" />

    <h1>Lista de productos</h1>
    {productos.map(producto => (
        <Producto
        key={producto.id}
        producto= {producto}
        productos = {productos}
        carrito={carrito}
        agregarProducto={agregarProducto}
        
        />
        
    ))}

      <Carrito 
      carrito ={carrito}
      agregarProducto ={agregarProducto}
      />

    <Footer fecha={fecha}/>
    

    </Fragment>
  );
}

export default App;
