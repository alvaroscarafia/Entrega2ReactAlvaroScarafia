import React from 'react';
import productos from "../productos";
import { useState, useEffect,  } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState({});
    

 useEffect(()=>{

    const getDetails = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve(productos);
    },2000)
  } );

  getDetails.then(res=>setDetails(res));
  },[] );

  return (
    <div>
        <ItemDetail props={details}/>
        </div>
  );
}

export default ItemDetailContainer;