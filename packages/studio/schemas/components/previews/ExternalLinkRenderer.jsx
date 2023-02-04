import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ExternalLinkRenderer = (props) => {
  const { children } = props;

  return (
    <span>
      {children}
      <FaExternalLinkAlt style={{ display: 'inline', paddingLeft: '8px', paddingRight: '8px' }} />
    </span>
  );
};

ExternalLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExternalLinkRenderer;
