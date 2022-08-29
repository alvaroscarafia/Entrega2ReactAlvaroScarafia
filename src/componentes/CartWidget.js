import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import fotocarrito from '../multimedia/img/carritoLogo.png';

const CartWidget = () => {
  return (
    <div >
        <a href=""><img src={fotocarrito} alt="carritoLogo" style={{width:25, height: 25}}/></a>
    </div>
  )
};

export default CartWidget