import React from 'react'
import "../styles/item.css"



const Item = (props) => {
  return (
    <div className='container'>
      <ul className='item'>
        <img src={props.img} alt={props.key} />
        <li>{props.title}</li>
        <li>{props.price}</li>
      </ul>
    </div>
  )
}

export default Item