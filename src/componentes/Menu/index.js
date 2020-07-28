import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import './menu.css';
// import ButtonLink from './componentes/ButtonLink';
import Button from '../Button'

function Menu(){
    return (
        <nav className='Menu'>

            <a href='/'>
                <img className='Logo' src={Logo} alt='logo aluraflix'/>
            </a>

            {/* <ButtonLink href='/' className='ButtonLink'>
                Novo Vídeo
            </ButtonLink> */}

            <Button href='/' className='ButtonLink'>
                Novo Vídeo
            </Button>
        </nav>
    );

}

export default Menu;