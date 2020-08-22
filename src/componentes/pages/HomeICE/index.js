import React from 'react';
import styled from 'styled-components';
import Menu from '../../Menu';
import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import Footer from '../../Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
  /* padding-top: 58px; */

  @media(max-width: 800px){
    /* padding-top: 40px; */
  }
`;


function Home() {
  return (
    <AppWrapper>
      <Menu/>
     

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Algum texto de chamada para assistir ao último vídeo!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Footer />
    </AppWrapper>
  );
}

export default Home;
