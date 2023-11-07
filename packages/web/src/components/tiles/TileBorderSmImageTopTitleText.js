// Tile #8
import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';

export default function TileBorderSmImageTopTitleText({ image, alt, title, text }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card
      square
      sx={{
        border: 4,
        borderColor: 'primary.main',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        avatar={
          <Paper elevation={3} p={0}>
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{
                height: '50px',
                width: '50px',
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </Paper>
        }
      />
      <CardContent p={3}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
