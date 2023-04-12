/* eslint-disable import/no-cycle */
import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCardSegment from '../../serializer/NoIndentSerializer';

function ProductCardFlexSegment({ title, headingLevel, content }) {
  return (
    <Box sx={{ m: 3 }}>
      <Typography component={headingLevel} variant="h5" gutterBottom>
        {title}
      </Typography>
      <ProductCardSegment blocks={content} />
    </Box>
  );
}

export default ProductCardFlexSegment;
