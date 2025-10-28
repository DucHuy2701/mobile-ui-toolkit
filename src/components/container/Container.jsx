import React from 'react';
import './container.scss';

export default function Container({ children, size = 'md', className = '' }) {
  return <div className={`ui-container ui-container--${size} ${className}`}>{children}</div>;
}
