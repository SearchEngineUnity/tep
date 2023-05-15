import React from 'react';
import { Box, Button } from '@mui/material';
import { useStaticQuery, graphql } from 'gatsby';

function Color() {
  const palatte = useStaticQuery(
    graphql`
      query PaletteQuery {
        sanityPalette {
          _rawPrimary(resolveReferences: { maxDepth: 1 })
        }
      }
    `,
  );

  console.log(palatte);

  return (
    <Box sx={{ p: 6 }}>
      <Button color="primary">Click</Button>
      <br />
      <Button color="secondary">Click</Button>
      <br />
      <Box />
    </Box>
  );
}

export default Color;
