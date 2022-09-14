import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import foto from '../multimedia/img/LOGO.png';
import CartWidget from './CartWidget.js';
import {Link} from "react-router-dom";



const NavBar = () => {
return (
<div className='container-nav'>
    <div className='logo'><Link to="/"><img style={{width:500, height:185}} src={foto} alt="logo"/></Link></div>
        <div>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Gallery/">Galeria</Link></li>
                <li><Link to="/Contact/">Contacto</Link></li>
                <li>Ingresar</li>
                <li><CartWidget/></li>
            </ul>
        </div>
</div>
);
}

export default NavBar;