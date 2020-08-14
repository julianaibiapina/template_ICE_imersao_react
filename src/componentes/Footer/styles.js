/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  background-color: var(--primary);
  /* border-top: 2px solid #FF9900; */
  color: var(--white);
  padding: 48px 5%;

  display: flex;
  justify-content: space-between;
  

  div{
    flex: 1;
  }
  h3{
    width: 80%;
    border-bottom: 2px solid #FF9900;
  }

  a{
    display: flex;
    align-items: center;
    /* color: var(--title-color); */
    font-weight: 700;
    margin-bottom: 8px;
  }
  ul{
    margin: 0;
    padding: 10px;
  }
  .icon_social{   
   
    margin-right: 12px;
    height: 36px;
    width: 36;

  }

  .map { 
        width: 100%; 
        height: 200px; 
        background-color: grey; 
      } 

  @media(max-width: 800px){
    margin-bottom: 50px;
  }


`;
