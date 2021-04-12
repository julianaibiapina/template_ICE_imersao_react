import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  height: 90vh;
  color: var(--white);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover; /* usa toda o espaço disponível pra ele*/
  background-position: center;

 

  @media(max-width: 800px){
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;

  padding-top: 10%;
  height: 100%;

  background-image: linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5), rgba(0,0,0,0.9));

  @media (max-width:800px){
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  @media (max-width:800px){
    width: 100%;
  }

`;

ContentAreaContainer.Title = styled.h2`
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
  margin-top: 0;
  margin-bottom:32px;

  @media (max-width:800px){
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width:800px){
    display: none;
  }
`;

export const WatchButton = styled.button`
  cursor: pointer;
  padding: 16px 24px;
  display: none;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: 0;
  border-radius: 4px;

  color: var(--black);
  background-color: var(--white);

  @media(max-width: 800px){
    display: block;
  }
`;
