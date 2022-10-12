import React from 'react';
import { useState } from 'react';
import Navbar  from '../componentes/NavBar';
import "../styles/buyForm.css"
import { collection, addDoc } from "firebase/firestore";
import { useCartContext } from '../context/CartProvider';
import {db} from '../firebase/firebase';


const BuyForm = () => {
  const {cart, finalPrice} = useCartContext();

  const [buy, setBuy] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
  });

  const catchInputs = (e) =>{
    const {name, value} = e.target;
    setBuy({...buy,[name]:value})
  }

const createItem = async(obj) => {
    const colRef = collection(db, 'orders');
    const data = await addDoc(colRef, obj);
    return data.id;
};

  const saveData = (e) =>{
    e.prevetDefault();
    
    const items = cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity:product.quantity}));
    const final = finalPrice();
    const obj = {buy,items,final};

    createItem(obj).then(id=> console.log(id));
    
    setBuy({name: "",
      email: "",
      phone: "",
      address: ""})
  }


  return (
    <div>
      <Navbar/>

      <form onSubmit={saveData}>
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

            <button>
              Finalizar Compra
            </button>
        </div>
      </form>

    </div>
  )
}

export default BuyForm;