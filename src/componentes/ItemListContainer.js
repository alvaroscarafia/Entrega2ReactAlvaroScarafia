import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container d-flex justify-content-center pt-5'>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer