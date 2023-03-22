import React from 'react';
import Link from '@mui/material/Link';

function ExternalLink({ href, children, noreferrer, newTab, className }) {
  return (
    <Link
      target={newTab ? '_blank' : undefined}
      rel={
        newTab || noreferrer
          ? `${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`
          : undefined
      }
      className={className}
      href={href}
    >
      {children}
    </Link>
  );
}

export default ExternalLink;
