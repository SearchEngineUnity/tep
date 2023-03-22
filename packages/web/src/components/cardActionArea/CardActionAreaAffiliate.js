import React from 'react';
import CardActionArea from '@mui/material/CardActionArea';

function CardActionAreaAffiliate({ href, children }) {
  return (
    <CardActionArea target="_blank" rel="nofollow" href={href}>
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaAffiliate;
