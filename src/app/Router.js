import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Categorias from "../componentes/Categorias";



const Router = () => (
    <BrowserRouter>
        <Routes >
            <Route >
                <Route index element={<Home/>} />
                <Route path="/Contact/" element={<Contact/>} />
                <Route path="/Gallery/" element={<Gallery/>}/>
                <Route path="/Categorias/:category" element={<Categorias/>}/>

            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;