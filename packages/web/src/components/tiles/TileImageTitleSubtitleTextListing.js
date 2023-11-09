// Tile #7
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageTitleSubtitleTextListing({ image, alt, link, title, text, subtitle }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card rectangle elevation={link ? 8 : 0}>
      <ConditionalCardActionArea link={link}>
        <CardContent sx={{ display: 'flex' }}>
          <Box sx={{ flexDirection: 'row' }}>
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{
                height: '236px',
                width: '379px',
              }}
            />
          </Box>

          <Box sx={{ flexDirection: 'row' }} px={2}>
            <Typography gutterBottom variant="h3" component="p">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="p" sx={{ fontStyle: 'italic' }}>
              {subtitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </Box>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageTitleSubtitleTextListing;
