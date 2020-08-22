import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`

  display: inline-block;
  height: 168px;
  width: 298px;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

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


