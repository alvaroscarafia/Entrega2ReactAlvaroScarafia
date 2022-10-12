import React from 'react';
import { useState } from 'react';
import Navbar  from '../componentes/NavBar';
import "../styles/buyForm.css"
import {getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from '../context/CartProvider';

const BuyForm = () => {
  const dataBase = getFirestore();
  const {cart, finalPrice} = useCartContext();

  const initialValue = {
      name: '',
      email:'' ,
      phone: '',
      address:'' ,
    items: cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity:product.quantity})),
    total: finalPrice(),
  }

  const [buy, setBuy] = useState(initialValue);

  const catchInputs = (e) =>{
    const {name, value} = e.target;
    setBuy({...buy,[name]:value})
  }


  const saveData = async (e) => {
    e.prevetDefault();

    try {
      await addDoc(collection(dataBase,'orders'),{
        ...buy
      })
    } catch (error) {
      console.log(error)
    }

    setBuy({...initialValue})
  }


  return (
    <div>
      <Navbar/>

      <form onSubmit={saveData}>
        <div className='buyForm'>
          <h2>Formulario de Compra</h2>

          <input type="text" name="name" placeholder="Ingrese su nombre..." 
          onChange={catchInputs} value={buy.name}/>

          <input type="email" name="email" placeholder="Ingrese su email..." 
          onChange={catchInputs} value={buy.email}/>

          <input type="number" name="phone" placeholder="Ingrese su numero de telefono..." 
          onChange={catchInputs} value={buy.phone}/>

          <input type="text" name="address" placeholder="Ingrese su direccion..." 
          onChange={catchInputs} value={buy.address}/>

            <div>
              <button>
                Finalizar Compra
              </button>
            </div>
        </div>
      </form>

    </div>
  )
}

export default BuyForm;