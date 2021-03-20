import { computeHeadingLevel } from '@testing-library/dom';
import React from 'react';
const Producto = ({ producto, productos, carrito, agregarProducto }) => {
    //seleccionar productos
    const seleccionarProductos = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto ([
            ...carrito,producto
        ]);
    }
    const { nombre, precio, id } = producto;
    return (
        <div>
            <h2>{nombre}</h2>
            <p>C${precio}</p>
          
            {
                productos
                ?
                (
                    <button type="button" onClick={()=>seleccionarProductos(id)}>Comprar</button>
                )
                :
                (
                    <button type="button" onClick={()=>seleccionarProductos(id)}>Eliminar</button>
                )
                }
        </div>
    );
}

export default Producto;

