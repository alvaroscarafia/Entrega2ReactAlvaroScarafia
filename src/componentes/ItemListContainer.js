import React from 'react';
import '../styles/itemList.css';
import ItemList from './ItemList';
import productos from "../productos"
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

const [items, setItem] = useState([]);
const {category} = useParams();

 useEffect(()=>{
    const task = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve(productos);
    },1000)
  });

  if(category){
    task.then(res => setItem(res.filter(items => items.category === category)));
  }else{
    task.then(res =>{setItem(res)});
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
        <div><ItemList props={items}/></div>
    </div>
    
  )
}

export default ItemListContainer;