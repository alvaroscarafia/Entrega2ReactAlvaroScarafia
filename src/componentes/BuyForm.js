import React from 'react';
import Navbar  from '../componentes/NavBar';
import "../styles/buyForm.css"

const BuyForm = () => {
  return (
    <div>
      <Navbar/>
      <form>
        <div className='buyForm'>
          <h2>Formulario de Compra</h2>
          <input type="text" name="name" placeholder="Ingrese su nombre..." />
          <input type="email" name="email" placeholder="Ingrese su email..." />
          <input type="number" name="phone" placeholder="Ingrese su numero de telefono..." />
          <input type="text" name="address" placeholder="Ingrese su direccion..." />
            <div>
              <button>
                Finalizar Compra
              </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default BuyForm