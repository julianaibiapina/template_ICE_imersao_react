import styled from 'styled-components';

export const VideoCardContainer = styled.a`

  display: inline-block;
  height: 197px;
  width: 298px;
  border: 2px solid;
  border-radius: 10px;

  background-image: ${({url}) => `url(${url})`};
  background-size: cover;
  background-position: center;

  transition: opacity .3s;

  &:hover,
  &:focus{
    opacity: .5;
  }
`;
