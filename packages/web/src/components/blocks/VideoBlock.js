import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function VideoBlock({ url, ratio }) {
  return (
    <Box sx={{ pt: ratio, position: 'relative' }}>
      <StyledReactPlayer url={url} controls width="100%" height="100%" />
    </Box>
  );
}

export default VideoBlock;
