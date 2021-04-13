import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`

  display: inline-block;
  height: 170px;
  width: 300px;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  transition: transform 200ms;

  &:hover {
    transform: scale(1.2);

    .cardContent {
      background-image: linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,0.55));
    }
  }

  .cardContent{
    width: 100%;
    height: 100%;

    background-image: linear-gradient(to bottom,rgba(0,0,0,0.3), rgba(0,0,0,0.75));

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .titulos{
    height: 40%;
    width: 100%;

    padding: 0px 16px 16px 16px;

    display: flex;
  }

  p{
    margin: 0;
    display: flex;
    align-items: center;
  }

  .index{
    font-size: 38px;
    margin-right: 8px;
  }

  .iconCard{
    height: 26px;
    width: 26px;

    margin: 16px;

    display: flex;
    align-items: center;
    justify-content: center;


  }
`;
