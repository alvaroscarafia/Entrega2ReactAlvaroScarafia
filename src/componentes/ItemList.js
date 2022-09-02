import React from 'react';
import Item from './Item';
import { useState } from 'react';
import mesaRio from "../multimedia/img/rio.JPEG";
import mesaFusion from "../multimedia/img/fusion.JPG";


const ItemList = ({}) => {

  const [items, setItem] = useState(
    [{id: 1, title: "Mesa Rio",price: 15000,img:mesaRio},
  {id: 2, title: "Mesa Fusion", price: 18000,img:mesaFusion},
  ]);

  return (
    <div>
        {items.map((items) =>{
          return <Item
          key={items.id}
          img={items.img}
          title={items.title}
          price={items.price}
          />
        })}
    </div>
  )
}

export default ItemList