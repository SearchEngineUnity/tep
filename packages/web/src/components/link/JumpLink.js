import React from 'react';
import Link from '@mui/material/Link';

function JumpLink({ hash, children, className }) {
  return (
    <Link href={`#${hash}`} className={className} underline="always">
      {children}
    </Link>
  );
}

export default JumpLink;
