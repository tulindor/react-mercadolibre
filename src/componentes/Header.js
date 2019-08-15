import React from 'react';
import Formulario from './Formulario';

const Header = ({titulo, consultarProductos}) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <a className="navbar-brand" >{titulo}</a>
        <Formulario consultarProductos={consultarProductos}/>
    </nav>  
);

export default Header;