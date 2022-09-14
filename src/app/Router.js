import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";


const Router = () => (
    <BrowserRouter>
        <Routes >
            <Route >
                <Route index element={<Home/>} />
                <Route path="/Contact/" element={<Contact/>} />
                <Route path ="/Gallery/" element={<Gallery/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;