// Tile #9
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageBackgroundTitle({ image, link, title }) {
  const bgImage = image.url;

  return (
    <ConditionalCardActionArea link={link}>
      <Box
        sx={{
          height: '380px',
          width: '380px',
          backgroundImage: { sx: 'none', sm: `url(${bgImage})` },
          borderRadius: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            border: '#406CCB solid 2px',
            backgroundColor: 'white',
            fontSize: '20px',
            fontWeight: 700,
            textAlign: 'center',
            py: 2,
            width: '280px',
          }}
        >
          {title}
        </Box>
      </Box>
    </ConditionalCardActionArea>
  );
}

export default TileImageBackgroundTitle;
