import React, { useState, useEffect,} from 'react';
import {getFirestore, doc, getDoc} from "firebase/firestore";
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);
    const {detalleId} = useParams();

 useEffect(()=>{
    const database = getFirestore();
    const dataDoc = doc(database, "products" ,detalleId);
    
    getDoc(dataDoc)
      .then(res => setDetails({id: res.id,...res.data()}))
  },[detalleId] );


  return (
        <div>
          <ItemDetail props={details}/>
        </div>
  );
}

export default ItemDetailContainer;