import React from 'react';
import PropTypes from 'prop-types';
import { MdLink } from 'react-icons/md';

const JumpLinkRenderer = ({ children }) => (
  <span>
    {children}
    <MdLink style={{ display: 'inline', paddingLeft: '8px', paddingRight: '8px' }} />
  </span>
);

JumpLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JumpLinkRenderer;
