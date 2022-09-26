import React from 'react';
import { useCartContext } from '../context/CartProvider';
import '../styles/itemCart.css';

const ItemCart = ({product}) => {
    const { removeProductCart } =  useCartContext();

  return (
    <div className='itemCart'>
        <img src={product.src} alt={product.title} />
        <div>
            <p>Nombre: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: {product.quantity * product.price}</p>
            <button onClick={()=> removeProductCart(product.id)}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;