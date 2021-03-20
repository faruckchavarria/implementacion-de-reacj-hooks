import React from 'react';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => {
    return ( 
        <div>
            <h2>Tu carrito de compras</h2>
            {carrito.map(producto => (
                <Producto 
                 key={producto.id}
                 producto = {producto}
                 carrito= {carrito}
                 agregarProducto = {agregarProducto}       
                        />
            ))}
        </div>
     );
}

export default Carrito;