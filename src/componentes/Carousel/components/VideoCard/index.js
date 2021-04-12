import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer } from './styles';
import IconCard from '../../../../assets/img/logo_white_1.png';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, indexSermao }) {
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
          <img src={IconCard} alt="logo ICE Sobral" className="iconCard" />
          <div className="titulos">
            <p className="index">
              {indexSermao + 1}
            </p>
            <p>{videoTitle}</p>
          </div>
        </div>
      </VideoCardContainer>

    </>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  indexSermao: PropTypes.number.isRequired,
};

export default VideoCard;
