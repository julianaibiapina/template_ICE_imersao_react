import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    margin-top: 94px;
    padding-top: 50px; /* altura do menu, pois por ser fixed, ele está num nivel acima do Main*/
    padding-left: 5%;
    padding-right: 5%;



    @media(max-width: 800px) {
        margin-top: 40px;
    }
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />

      <Main>
        {children}
      </Main>

      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
