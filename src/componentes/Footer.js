import React from 'react';
import '../styles/footer.css';
import logofb from '../multimedia/img/logofb.svg';
import logoig from '../multimedia/img/logoig.svg';
import logoyt from '../multimedia/img/logoyt.svg';


const Footer = () => {
  return (
    <div className='footer-Container'>
        <div className='text'>
            <h4>Buscanos en nuestras redes:</h4>
        </div>
        <div className='logosContainer'>
            <img src={logofb} alt="logo-face" className='logoF'/>
            <img src={logoig} alt="logo-ig" className='logoF'/>
            <img src={logoyt} alt="logo-yt" className='logoF'/>
        </div>
        <div>
            <p>
                &copy; Todos los derechos reservados.
            </p>
        </div>
    </div>
  )
}

export default Footer;