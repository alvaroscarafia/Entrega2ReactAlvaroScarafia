import React from 'react'
import ItemCount from './ItemCount'
import '../styles/itemList.css';
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {
  return (
    <div className='contenedor'>
        <h1>{greeting}</h1>
        <div><ItemList/></div>
        <div className='contador'>
          <ItemCount stock='5' onAdd={ ( contador )=> { localStorage.setItem("CantidadCarrito", contador)
            alert(`Agrego ${contador} al carrito`
            )}}/>
        </div>
        
    </div>
    
  )
}

export default ItemListContainer;