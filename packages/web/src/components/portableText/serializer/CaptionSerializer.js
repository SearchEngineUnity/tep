import { PortableText } from '@portabletext/react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ConditionalLink from '../../link/ConditionalLink';

const serializers = {
  // not sure if this container thing works anymore
  container: (props) => (
    <Box component="figcaption" sx={{ textAlign: 'center' }}>
      {props.children}
    </Box>
  ),
  block: {
    normal: ({ children }) => {
      return children[0] ? (
        <Typography
          gutterBottom
          variant="caption"
          component="p"
          className="caption-text"
          sx={{ fontStyle: 'italic' }}
        >
          {children}
        </Typography>
      ) : (
        <br />
      );
    },
  },
  marks: {
    hashId: ({ children }) => children,
    internalLocal: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    internalGlobal: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    externalLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    affiliateLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
    jumpLink: ({ value, children }) => {
      return (
        <ConditionalLink link={value} className="caption-link">
          {children}
        </ConditionalLink>
      );
    },
  },
  listItem: ({ children }) => (
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} renderContainerOnSingleChild />;
}

export default BlockContent;
