import React from 'react';
import Item from './Item';



const ItemList = ({props}) => {


  return (
    <div>
        {
            props.map((item) =>{
          return <Item
          key={item.id}
          src={item.src}
          title={item.title}
          price={item.price}
          detail={item.detail}
          props={item}
          />
        })
      }
      
      </div>

  )
}

export default ItemList;