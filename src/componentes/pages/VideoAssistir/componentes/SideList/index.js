import React from 'react';
import styled from 'styled-components';

const ListaVideos = styled.ul`
    width: 30%;
    margin: 24px 0 0 0 ;
    padding: 0;
    overflow: auto;


    list-style-type: none;

    &::-webkit-scrollbar {
    width: 8px;
    }
    
    
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        /* -webkit-border-radius: 10px; */
        /* border-radius: 10px; */
    }
    
    &::-webkit-scrollbar-thumb {
        /* -webkit-border-radius: 10px; */
        /* border-radius: 10px; */
        background: rgba(169,169,169,0.5); 
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }

    &::-webkit-scrollbar-thumb:hover{
        background: rgba(169,169,169,0.8);
    }

    li{
        padding: 16px;
    }

    @media(max-width: 800px){
        width: 100%;
    }
`;

const VideoCard = styled.div`
    flex: 1;
`;

function SideList({ category }) {
  const categoryTitle = category.titulo;
  const { videos } = category;
  return (
    <>

      <ListaVideos>
        {videos.map((video, index) => (
          <li><a href={video.url}>{index} {video.titulo}</a></li>

        ))}
      </ListaVideos>

      <VideoCard>
        <p>{categoryTitle}</p>
      </VideoCard>
    </>

  );
}

export default SideList;
