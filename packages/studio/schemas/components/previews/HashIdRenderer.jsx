import React from 'react';
import PropTypes from 'prop-types';
import { FaHashtag } from 'react-icons/fa';

const HashIdRenderer = ({ children }) => (
  <span>
    {children}
    <FaHashtag style={{ display: 'inline', paddingLeft: '8px', paddingRight: '8px' }} />
  </span>
);

HashIdRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HashIdRenderer;
