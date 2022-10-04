import React from 'react';
import NavBar from '../componentes/NavBar';
import { useCartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';
import ItemCart from '../componentes/ItemCart';
import '../styles/itemCart.css';
import EmptyCartPng from "../multimedia/img/carritovacio.png";
import {getFirestore, collection, addDoc } from "firebase/firestore";


const Cart = () => {
  const {cart, finalPrice} = useCartContext();

  const buy ={
    buyer:{
      name: 'Alvaro Scarafia David',
      email: 'alvaro_s.d@hotmail.com',
      phone: '3434502304',
      address: 'parana'
    },
    items: cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity:product.quantity})),
    total: finalPrice(),
  }

  const buyFunction = () =>{
    const dataBase = getFirestore();
    const buyCollection = collection(dataBase,'Buy Orders');
    
    addDoc(buyCollection, buy)
      .then(({id}) => console.log(id))
  }

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
        <div className=''>
          {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
          }
          <p className='total' style={{color: "white"}}>
            Total:$ {finalPrice()}
          </p>
          <button onClick={buyFunction}>COMPRAR</button>
        </div>
    </div>
  )
}

export default Cart;