import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Categorias from "../componentes/Categorias";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import Cart from "../pages/Cart";
import BuyForm from "../componentes/BuyForm"



const Router = () => (
    <BrowserRouter>
        <Routes >
            <Route >
                <Route index element={<Home/>} />
                <Route path="/Contact/" element={<Contact/>} />
                <Route path="/Gallery/" element={<Gallery/>}/>
                <Route path="/Categorias/:category" element={<Categorias/>}/>
                <Route path="/Detalle/:detalleId" element={<ItemDetailContainer/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/buyForm" element={<BuyForm/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;