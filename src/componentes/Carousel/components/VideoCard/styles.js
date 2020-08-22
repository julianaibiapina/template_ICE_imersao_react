import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`

  display: inline-block;
  height: 168px;
  width: 298px;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  .cardContent{
    height: 168px;
    width: 298px;

    background-image: linear-gradient(to bottom,rgba(0,0,0,0.3), rgba(0,0,0,0.5));

    display: flex;
    align-items: flex-end;

    img{
      height: 12px;
    }

  }

  .titulos{
    background-color: black;

    height: 40%;
    width: 100%;

    padding: 0px 16px;
  }

  p{
    margin: 0;
  }
  /* transition: 250ms all;
  &:hover { 
    margin: 10px;
    margin: 0 40px;
    transform: scale(1.5);
  } */

  transition: opacity .3s;
  &:hover,
  &:focus{
    opacity: .5;
  }
`;


