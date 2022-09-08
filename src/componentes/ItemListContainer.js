import React from 'react'
import ItemCount from './ItemCount'
import '../styles/itemList.css';
import ItemList from './ItemList';
import productos from "../productos"
import { useState, useEffect } from 'react';


const ItemListContainer = ({greeting}) => {

let [items, setItem] = useState([]);

 useEffect(()=>{
    const task = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve(productos);
    },2000)
  } );

  task.then((res)=>{
    setItem(res)
  });
  },[]);

  return (
    <div className='contenedor'>
        <h1>{greeting}</h1>
        <div><ItemList props={items}/></div>
        <div className='contador'>
          <ItemCount stock='5' onAdd={ ( contador )=> { localStorage.setItem("CantidadCarrito", contador)
            alert(`Agrego ${contador} al carrito`
            )}}/>
        </div>
        
    </div>
    
  )
}

export default ItemListContainer;