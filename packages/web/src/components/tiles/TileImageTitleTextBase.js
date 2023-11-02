import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageRecSqrText({ image, alt, link, title, text }) {
  return (
    <Card
      elevation={link ? 8 : 0}
      sx={{ border: '1px solid #acb4b8', borderRadius: '0.25rem', height: '100%' }}
    >
      <ConditionalCardActionArea link={link}>
        <Box sx={{ pt: 2 }}>
          <GatsbyImage
            image={image}
            alt={alt || ''}
            style={{
              width: '50%',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
        <Box sx={{ py: 2, px: 1 }}>
          <Box sx={{ fontSize: '20px', fontWeight: 700, textAlign: 'center' }}>
            <div>{title}</div>
          </Box>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {text}
          </Typography>
        </CardContent>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageRecSqrText;
