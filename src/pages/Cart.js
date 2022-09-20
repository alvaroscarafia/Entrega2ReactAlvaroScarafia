import React, {useContext} from 'react';
import NavBar from '../componentes/NavBar';
import { CartContext } from '../context/CartProvider';

const Cart = () => {

  const cartProduct = useContext(CartContext);
  console.log('cartProduct', cartProduct);

  return (
    <div>
        <NavBar/>
    </div>
  )
}

export default Cart;