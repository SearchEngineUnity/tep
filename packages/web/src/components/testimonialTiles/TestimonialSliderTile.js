// Tile #4
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';

function TileImageTitleTextBase({ image, alt, name, text, role, company }) {
  console.log(image);
  console.log(alt);
  console.log(name);
  console.log(role);
  console.log(text);
  console.log(company);
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return <div>This is a test</div>;
}

export default TileImageTitleTextBase;
