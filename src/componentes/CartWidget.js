import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import fotocarrito from '../multimedia/img/carritoLogo.png';

const CartWidget = () => {
  return (
    <div >
        <Link to="/Cart"><img src={fotocarrito} alt="carritoLogo" style={{width:25, height: 25}}/></Link>
    </div>
  )
};

export default CartWidget