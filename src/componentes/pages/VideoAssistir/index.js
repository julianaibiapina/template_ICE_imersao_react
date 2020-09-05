import React from 'react';
import styled from 'styled-components';
import Menu from '../../Menu';
import SideList from './componentes/SideList';
import dadosIniciais from '../../../data/dados_iniciais.json';

const AppWrapper = styled.div`

    background: var(--grayDark);

    height: calc(100vh - 58px);
    margin-top: 58px;

    display: flex;
    
    color: white;
    
     

  @media(max-width: 800px){
    height: calc(100vh - 40px);
    margin-top: 40px;

    flex-direction: column-reverse;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />
      <SideList category={dadosIniciais.categorias[0]} />

    </AppWrapper>
  );
}

export default Home;
