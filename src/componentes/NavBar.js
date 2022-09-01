import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css'
import foto from '../multimedia/img/LOGO.png';
import CartWidget from './CartWidget.js';


const NavBar = () => {
return (
<div className='container-nav'>
    <div className='logo'><a href=""><img style={{width:500, height:185}} src={foto} alt="logo"/></a></div>
        <div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Ingresar</a></li>
                <li><a href="#"><CartWidget/></a></li>
            </ul>
        </div>
</div>
);
}

export default NavBar;