import React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';
import productos from "../productos"

const ItemList = () => {

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
    <div>
        {
            items.map((item) =>{
          return <Item
          key={item.id}
          src={item.src}
          title={item.title}
          price={item.price}
          />
        })
      }
    
    </div>
  )
}

export default ItemList;