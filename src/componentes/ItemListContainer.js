import React from 'react'
import ItemCount from './ItemCount'
import './itemList.css';


const ItemListContainer = ({greeting}) => {
  return (
    <div className='contenedor'>
        <h1>{greeting}</h1>
        <div className='contador'>
          <ItemCount stock='5'/>
        </div>
    </div>
    
  )
}

export default ItemListContainer;