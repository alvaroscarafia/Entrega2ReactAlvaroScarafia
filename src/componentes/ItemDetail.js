import React,{useState} from 'react';
import NavBar from './NavBar';
import '../styles/detail.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';


const ItemDetail = ({props}) => {
  const [data, setData] = useState(false);
  const {addItem} = useCartContext();

  const onAdd = (quantity) =>{
    setData(true);
    addItem(props, quantity);
  }

  return (
    <div>
      <NavBar/>
      <div className='itemDetail'>
        <div>
          <img alt="" src={props.src} />
        </div>
        <h1>{props.title}</h1>
        <p>${props.price}</p>
        <p>{props.detail}</p>
          <div className='contador'>
            {
              data 
              ? <Link to='/Cart'>Terminar Compra</Link>
              : <ItemCount stock='5' onAdd={onAdd}/>
            }
          </div>
      </div>
    </div>
  )
}


export default ItemDetail;