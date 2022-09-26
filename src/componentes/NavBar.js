import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import foto from '../multimedia/img/LOGO.png';
import CartWidget from './CartWidget.js';
import {NavLink} from "react-router-dom";



const NavBar = () => {
return (
<div className='container-nav'>
    <div className='logo'><NavLink to="/"><img style={{width:500, height:185}} src={foto} alt="logo"/></NavLink></div>
        <div>
            <ul>
                <li><NavLink className='link-nav' to="/">Inicio</NavLink></li>
                <li><NavLink className='link-nav' to="/Gallery/">Galeria</NavLink></li>
                <li><NavLink className='link-nav' to="/Contact/">Contacto</NavLink></li>
                <li><CartWidget/></li>
            </ul>
        </div>
</div>
);
}

export default NavBar;