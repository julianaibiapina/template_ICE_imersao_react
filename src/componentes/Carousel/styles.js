import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;

`;

export const Title = styled.h3`
  font-size: 35px;
  font-weight: normal;
  line-height: 1;

  padding: 20px;
  margin-bottom: 16px;
  border-radius: 4px;

  display: inline-block;

  @media(max-width: 800px){
    font-size: 18px;
    padding: 10px;

  }

`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus{
    opacity: .5;
  }

  @media(max-width: 800px){
    display: block;
    margin-left: 0;
    margin-bottom: 16px;

  }
`;

export const VideoCardList = styled.ul`
  list-style: none;

  padding-left: 0;
  margin: 0;

  display: flex;
  overflow-x: auto;

  li{
    margin-right: 16px;
  }
`;

