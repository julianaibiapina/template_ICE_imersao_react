import React from 'react';
import { VideoCardContainer } from './styles';
import SpanImg from '../../../../assets/img/logo_white_1.png';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        // style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      >
        <div className="cardContent">
          <div className="titulos">
            {/* <img src={SpanImg} alt="Girl in a jacket" height="20px"/>  */}
            <p>{videoTitle}</p>
          </div>
        </div>
      </VideoCardContainer>

    </>
  );
}

export default VideoCard;
