import React from 'react';
import PropTypes from 'prop-types';
import './typography.scss';

export default function Typography({ variant = 'p', children, className = '' }) {
  const Tag = variant;
  return <Tag className={`ui-typography ui-typography--${variant} ${className}`}>{children}</Tag>;
}

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'span', 'small']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
