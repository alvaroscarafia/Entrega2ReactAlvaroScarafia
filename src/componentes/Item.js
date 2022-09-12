import React from 'react'
import "../styles/item.css"
import ItemCount from './ItemCount'



const Item = (props) => {

  return (
    <div className='container'>
      <ul className='item'>
        <img src={props.src} alt="producto" />
        <li>{props.title}</li>
        <li>Precio: ${props.price}</li>

        <div className='contador'>

    <ItemCount stock='5' onAdd={ ( contador )=> { localStorage.setItem("CantidadCarrito", contador)
            alert(`Agrego ${contador} ${props.title} al carrito`
            )}}/>

      </div>
      </ul>
    </div>

  )
}

export default Item;