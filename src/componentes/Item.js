import React from 'react'
import "../styles/item.css"



const Item = (props) => {

  return (
    <div className='container'>
      <ul className='item'>
        <img src={props.src} alt="producto" />
        <li>{props.title}</li>
        <li>{props.price}</li>
      </ul>
    </div>
  )
}

export default Item