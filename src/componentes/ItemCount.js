import React from 'react';
import { useState } from 'react';

const ItemCount = ({ stock,cuentaInicial = 1 }) =>{
    const [contador, setContador] = useState(cuentaInicial);

    return (
    <div>
    Contador: {contador}
    <button onClick={() => setContador(cuentaInicial)}>Resetiar</button>
    <button onClick={() => setContador((cuentaPrevia) => cuentaPrevia - 1)}>
        -
    </button>
    <button onClick={() => setContador((cuentaPrevia) => cuentaPrevia + 1)}>
        +
    </button>
    </div>
    );
}

export default ItemCount;