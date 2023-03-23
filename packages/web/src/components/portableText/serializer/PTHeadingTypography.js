import React from 'react';
import Typography from '@mui/material/Typography';

function PTHeadingTypography({ variant, id, children }) {
  return (
    <Typography variant={variant} gutterBottom id={id} sx={{ mt: '1.35em', scrollMargin: '45px' }}>
      {children}
    </Typography>
  );
}

export default PTHeadingTypography;
