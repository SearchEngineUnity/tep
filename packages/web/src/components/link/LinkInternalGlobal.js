import React from 'react';
import Link from '@mui/material/Link';

function InternalGlobal({ href, children, newTab, className }) {
  return (
    <Link
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener' : undefined}
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}

export default InternalGlobal;
