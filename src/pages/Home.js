import React from 'react'
import NavBar from '../componentes/NavBar'
import ItemListContainer from '../componentes/ItemListContainer'
import Footer from '../componentes/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Solano Diseño! "}/>
      <Footer/>
    </div>
  )
}

export default Home;