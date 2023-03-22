import React from 'react';
import Link from '@mui/material/Link';

function AffiliateLink({ href, children, className }) {
  return (
    <Link target="_blank" rel="nofollow" className={className} href={href}>
      {children}
    </Link>
  );
}

export default AffiliateLink;
