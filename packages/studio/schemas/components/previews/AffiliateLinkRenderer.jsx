import React from 'react';
import PropTypes from 'prop-types';
import { TbFileDollar } from 'react-icons/tb';

const AffiliateLinkRenderer = (props) => {
  const { children } = props;

  return (
    <span>
      {children}
      <TbFileDollar style={{ display: 'inline', paddingLeft: '8px', paddingRight: '8px' }} />
    </span>
  );
};

AffiliateLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AffiliateLinkRenderer;
