import React from 'react';
import { useState } from 'react';
import Navbar  from '../componentes/NavBar';
import "../styles/buyForm.css"
import { useCartContext } from '../context/CartProvider';
import {createItem} from '../firebase/firebase';
import {  ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BuyForm = () => {
  const {cart, finalPrice, emptyCart} = useCartContext();
  const [buy, setBuy] = useState({
      name: "",
      email: "",
      email2:"",
      phone: "",
      address: "",
  });

  const catchInputs = (e) =>{
    setBuy({...buy, [e.target.name] : e.target.value})
  }

  const saveData = (e) =>{
    e.preventDefault();

    if(!buy.name || !buy.email || !buy.email2 || !buy.phone || !buy.address){
      toast.warn('Debe completar todos los campos requeridos',{
        position:"bottom-center",
        autoClose: 1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
      });
    }else if(buy.email !== buy.email2){
      toast.warn('El email debe coincidir',{
        position:"bottom-center",
        autoClose: 1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
      });
    }else{

    const items = cart.map(product => ({id:product.id, title: product.title, price: product.price, quantity:product.quantity}));
    const final = finalPrice();
    const buyDate = new Date();
    const obj = {buy,items,final,buyDate};

    createItem(obj).then(id=>{
    console.log(id);
    toast.success(`
            COMPRA FINALIZADA EXITOSAMENTE
            El n° de orden de compra es ${id}
            Te enviaremos los detalles a ${buy.email}
            ¡Muchas Gracias!`,{
        position:"bottom-center",
        autoClose: 10000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,});

    setBuy({name: "",email: "",email2:"",phone: "",address: "",});

    emptyCart();
  })}}
  

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

          <input type="email" name="email2" placeholder="Confirme su email..." 
          value={buy.email2} onChange={catchInputs} />

          <input type="number" name="phone" placeholder="Ingrese su numero de telefono..." 
          value={buy.phone} onChange={catchInputs}/>

          <input type="text" name="address" placeholder="Ingrese su direccion..." 
          value={buy.address} onChange={catchInputs}/>

            <button onClick={saveData} type='submit'>
              Finalizar Compra
            </button>
            <ToastContainer />
        </div>
      </form>

    </div>
  )
  }

export default BuyForm;