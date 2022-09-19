import React from 'react';
import NavBar from './NavBar';
import '../styles/detail.css'


const ItemDetail = ({props}) => {

  return (
    <div>
      <NavBar/>
      <div className='itemDetail'>
        <div>
          <img alt="" src={props.src} />
        </div>
        <h1>{props.title}</h1>
        <p>${props.price}</p>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}


export default ItemDetail;