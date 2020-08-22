import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_white.png';
import Button from '../Button';

import { LogoImage, MenuWrapper } from './style.js';

function Menu() {
  return (
    <MenuWrapper className="Menu">

      <Link to="/">
        <LogoImage src={Logo} alt="logo aluraflix" />
      </Link>

      <Button as={Link} to="/">
        Sobre
      </Button>
      {/* <Button as={Link} to="/cadastro/video">
        Novo Vídeo
      </Button> */}
    </MenuWrapper>
  );
}

export default Menu;
