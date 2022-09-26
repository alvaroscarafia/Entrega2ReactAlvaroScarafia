import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
import fotocarrito from '../multimedia/img/carritoLogo.png';
import {useCartContext } from '../context/CartProvider'

const CartWidget = () => {
  const {finalProducts } = useCartContext();

  return (
    <div >
        <Link to="/Cart"><img src={fotocarrito} alt="carritoLogo" style={{width:25, height: 25}}/></Link>
        <span>{finalProducts() || ''}</span>
    </div>
  )
};

export default CartWidget