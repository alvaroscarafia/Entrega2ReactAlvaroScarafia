import React from 'react';
import "../styles/item.css";
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';




const Item = ({props}) => {

  return (
    
    <Link to={`/Detalle/${props.id}`} className='container'>
      <ul className='item'>
        <img src={props.src} alt="producto" />
        <li>{props.title}</li>
        <li>Precio: ${props.price}</li>
          <div className='contador'>
            <ItemCount stock='5' onAdd={ ( contador )=> { localStorage.setItem("CantidadCarrito", contador)
            alert(`Agrego ${contador} ${props.title} al carrito`)}}/>
          </div>
      </ul>
    </Link>
    
  )
}

export default Item;