import React from 'react';
import PropTypes from 'prop-types';
import { GiLinkedRings } from 'react-icons/gi';

const InternalGlobalRenderer = ({ children }) => (
  <span>
    {children}
    <GiLinkedRings style={{ display: 'inline', paddingLeft: '8px', paddingRight: '8px' }} />
  </span>
);

InternalGlobalRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InternalGlobalRenderer;
