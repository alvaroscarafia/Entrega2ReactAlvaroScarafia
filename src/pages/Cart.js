import React from 'react';
import NavBar from '../componentes/NavBar';
import { useCartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';
import ItemCart from '../componentes/ItemCart';
import '../styles/itemCart.css';
import EmptyCartPng from "../multimedia/img/carritovacio.png";




const Cart = () => {
  const {cart, finalPrice} = useCartContext();

  //renderin condicional para el carrito con los productos finales
  if(cart.length === 0){
    return (
      <>
        <NavBar/>
        <div className='emptyCart'>
          <img src={EmptyCartPng} alt="EmptyCartPng" />
          <p>No hay elementos en el carrito</p>
          <Link className='finish-link' to='/'>Hacer Compras</Link>
        </div>
        
      </>
    )
  }

  return (
    <div>
      <div><NavBar/></div>
        <div>
          {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
          }
          <p className='total' style={{color: "white"}}>Total:$ {finalPrice()}</p>
          <div className='buyButton'>
            <Link to="/buyForm"><button>COMPRAR</button></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Cart;