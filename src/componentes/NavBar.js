import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import foto from '../multimedia/img/LOGOdisaing.svg';

const NavBar = () => {
return (
<div className='container-nav'>
    <div className='logo'><a href=""><img src={foto} alt="logo"/></a></div>
        <div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Ingresar</a></li>
            </ul>
        </div>
</div>
);
}

export default NavBar;