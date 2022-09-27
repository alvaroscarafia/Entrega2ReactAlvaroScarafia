import React,{ useState, useEffect } from 'react';
import {getFirestore, collection, getDocs,query , where} from "firebase/firestore";
import '../styles/itemList.css';
import ItemList from './ItemList';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

const [items, setItem] = useState([]);
const {category} = useParams();

useEffect(()=>{
    const database = getFirestore();
    const dataCollection = collection(database,"products");
    
    if(category){
      const dataFilter = query(dataCollection, where("category","==",category))
        getDocs(dataFilter)
          .then(res => setItem( res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }else{
      getDocs(dataCollection)
          .then(res => setItem( res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  },[category]);

  return (
    <div className='contenedor'>
        <h1>{greeting}</h1>
        <div>
          <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" className='boton'>
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link className='link' to="/Categorias/Ratoneras">Mesas Ratoneras</Link></Dropdown.Item>
        <Dropdown.Item ><Link className='link' to="/Categorias/Comedor">Mesas Comedor</Link></Dropdown.Item>
        <Dropdown.Item ><Link className='link' to="/Categorias/Tablas">Tablas</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
        <div><ItemList items={items}/></div>
    </div>
    
  )
}

export default ItemListContainer;