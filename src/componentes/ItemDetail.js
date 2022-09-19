import React from 'react';
import NavBar from './NavBar';
import '../styles/detail.css'
import ItemCount from './ItemCount'


const ItemDetail = ({props}) => {

  return (
    <div>
      <NavBar/>
      <div className='itemDetail'>
        <div>
          <img alt="" src={props.src} />
        </div>
        <h1>{props.title}</h1>
        <p>${props.price}</p>
        <p>{props.detail}</p>
        <div className='contador'>
            <ItemCount stock='5' onAdd={ ( contador )=> { localStorage.setItem("CantidadCarrito", contador)
            alert(`Agrego ${contador} ${props.title} al carrito`)}}/>
          </div>
      </div>
    </div>
  )
}


export default ItemDetail;