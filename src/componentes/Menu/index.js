import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_white.png';
import Button from '../Button';

import { LogoImage, MenuWrapper } from './style.js';

function Menu() {
  return (
    <MenuWrapper className="Menu">

      <Link to="/">
        <LogoImage src={Logo} alt="Igreja Cristã Evangélica de Sobral" />
      </Link>

      <Button as={Link} to="/">
        Sobre
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
