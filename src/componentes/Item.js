import React from 'react';
import "../styles/item.css";
import {Link} from 'react-router-dom';




const Item = ({props}) => {

  return (
    
    <Link to={`/Detalle/${props.id}`} className='container link'>
      <ul className='item'>
        <img src={props.src} alt="producto" />
        <li>{props.title}</li>
        <li>Precio: ${props.price}</li>
      </ul>
    </Link>
    
  )
}

export default Item;