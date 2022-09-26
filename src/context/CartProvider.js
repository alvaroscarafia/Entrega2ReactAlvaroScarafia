import React,{useState, useContext} from 'react';
export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
//Estado de carrito
const [cart, setCart] = useState([]);
//funcion agregar producto al carrito
const addItem = (item,quantity) =>{
  if (isInCart(item.id)){
    setCart(cart.map(product => {
      return product.id === item.id ? {...product,quantity: product.quantity + quantity} : product
    }));
  } else {
    setCart([...cart, {...item, quantity}]);
  }
};

//funciones del contexto entre item y cart
const finalPrice = () =>{
  return cart.reduce((a,b)=> a + b.quantity * b.price,0);
};
const finalProducts = () => cart.reduce((c,actualProduct)=> c + actualProduct.quantity,0);
const removeProductCart = (id) => setCart(cart.filter(product => product.id !== id));
const emptyCart = () => setCart([]);
const isInCart  = (id) => cart.find(product => product.id === id) ? true : false;
const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
      emptyCart,
      isInCart,
      removeItem,
      addItem,
      removeProductCart,
      finalProducts,
      finalPrice,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;