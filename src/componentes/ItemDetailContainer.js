import React from 'react';
import productos from "../productos";
import { useState, useEffect,} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
    const {detalleId} = useParams();

 useEffect(()=>{
    const getDetails = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve(productos);
    },2000)
  } );

  getDetails.then(res=>setDetails(res.find(productos => productos.id === parseInt(detalleId))));
  },[] );

  return (
        <div>
        <ItemDetail props={details}/>
        </div>
  );
}

export default ItemDetailContainer;