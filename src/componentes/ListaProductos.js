import React from 'react';
import Producto from './Producto';

const ListaProductos = ({productos}) => (
    <div className="row">
        {productos.map(prod =>(
            <Producto
                key={prod.id}
                producto={prod}
            />
        ))}
    </div>
);

export default ListaProductos;