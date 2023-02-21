import React from 'react';
import { CardActionArea } from 'gatsby-theme-material-ui';

function CardActionAreaInternalLocal({ href, children, newTab }) {
  return (
    <CardActionArea
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
      to={href}
    >
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaInternalLocal;
