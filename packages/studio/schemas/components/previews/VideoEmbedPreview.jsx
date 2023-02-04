/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import getVideoId from 'get-video-id';

const getEmbedCode = (value) => {
  const videoId = value && value.url ? getVideoId(value.url) : '';

  if (!videoId) {
    return <span />;
  }

  switch (videoId.service) {
    case 'youtube': {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId.id}?rel=0`}
          frameBorder="0"
          allowFullScreen
        />
      );
    }

    case 'vimeo': {
      return (
        <iframe
          src={`https://player.vimeo.com/video/${videoId.id}`}
          width="640"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        />
      );
    }
    default: {
      return <span>Unsupported video service: {videoId.service}</span>;
    }
  }
};

const YoutubeVideo = ({ value }) => <div style={{ minHeight: '2em' }}>{getEmbedCode(value)}</div>;

export default YoutubeVideo;
