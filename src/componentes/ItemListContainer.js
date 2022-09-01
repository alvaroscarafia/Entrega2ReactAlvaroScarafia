import React from 'react'
import ItemCount from './ItemCount'
import '../styles/itemList.css';


const ItemListContainer = ({greeting}) => {
  return (
    <div className='contenedor'>
        <h1>{greeting}</h1>
        <div className='contador'>
          <ItemCount stock='5' onAdd={ ( contador )=> alert(`Agrego ${contador} al carrito`)}/>
        </div>
    </div>
    
  )
}

export default ItemListContainer;