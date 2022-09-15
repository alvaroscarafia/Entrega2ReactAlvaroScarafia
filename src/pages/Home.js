import React from 'react'
import NavBar from '../componentes/NavBar'
import ItemListContainer from '../componentes/ItemListContainer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Solano Diseño! "}/>
      </div>
  )
}

export default Home;