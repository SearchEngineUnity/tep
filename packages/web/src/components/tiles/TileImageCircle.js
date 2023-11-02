import React from 'react';
import Card from '@mui/material/Card';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageCircle({ image, alt, link }) {
  return (
    <Card square elevation={link ? 8 : 0} sx={{ borderRadius: '10000px' }}>
      <ConditionalCardActionArea link={link}>
        <GatsbyImage image={image} alt={alt || ''} />
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageCircle;
