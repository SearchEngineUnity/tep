import React from 'react';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

const InternalLocalRenderer = ({ children }) => (
  <span>
    {children}
    <FaLink style={{ display: 'inline', paddingLeft: '8px', paddingRight: '8px' }} />
  </span>
);

InternalLocalRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InternalLocalRenderer;
