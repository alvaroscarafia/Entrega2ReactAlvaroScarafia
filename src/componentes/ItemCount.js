import React from 'react';
import { useState } from 'react';


const ItemCount = ({ stock,cuentaInicial = 1 ,onAdd}) =>{
    const [contador, setContador] = useState(cuentaInicial);

    return (
    <div>
        Cantidad: {contador}
        
        <button onClick={() => setContador(cuentaInicial)}>Resetiar</button>

        <button onClick={() =>{
            contador > cuentaInicial ? setContador( contador - 1): setContador(cuentaInicial)}}>
            -
        </button>
        <button onClick={() =>{ 
            contador < stock ? setContador(contador + 1) : setContador(stock)}}>
            +
        </button>
        <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
    );
}

export default ItemCount;