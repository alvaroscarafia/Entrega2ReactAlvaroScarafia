import React from 'react';
import { useState } from 'react';
import Navbar  from '../componentes/NavBar';
import "../styles/buyForm.css"
import { useCartContext } from '../context/CartProvider';
import {createItem} from '../firebase/firebase';


const BuyForm = () => {
  const {cart, finalPrice} = useCartContext();
  const [buy, setBuy] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
  });

  const catchInputs = (e) =>{
    setBuy({...buy, [e.target.name] : e.target.value})
  }

  const saveData = (e) =>{
    e.preventDefault();
    
    const items = cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity:product.quantity}));
    const final = finalPrice();
    const obj = {buy,items,final};

    createItem(obj).then(id=> console.log(id));
    
    setBuy({name: "",
      email: "",
      phone: "",
      address: "",})
  }


  return (
    <div>
      <Navbar/>

      <form>
        <div className='buyForm'>
          <h2>Formulario de Compra</h2>

          <input type="text" name="name" placeholder="Ingrese su nombre..." 
          value={buy.name} onChange={catchInputs}/>

          <input type="email" name="email" placeholder="Ingrese su email..." 
          value={buy.email} onChange={catchInputs} />

          <input type="number" name="phone" placeholder="Ingrese su numero de telefono..." 
          value={buy.phone} onChange={catchInputs}/>

          <input type="text" name="address" placeholder="Ingrese su direccion..." 
          value={buy.address} onChange={catchInputs}/>

            <button onClick={saveData} type='submit'>
              Finalizar Compra
            </button>
        </div>
      </form>

    </div>
  )
}

export default BuyForm;