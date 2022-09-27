import React, {useContext} from 'react';
import "../styles/item.css";
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartProvider';



const Item = ({info}) => {

useContext(CartContext);
  
  
return (
    
    <Link to={`/Detalle/${info.id}`} className='container link'>
      <ul className='item'>
        <img src={info.src} alt="producto" />
        <li>{info.title}</li>
        <li>Precio: ${info.price}</li>
      </ul>
    </Link>
    
  )
}

export default Item;