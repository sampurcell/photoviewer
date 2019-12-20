import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ onClick, selected }) => {
  return (
    <button onClick={() => onClick(selected)}>
      <span className={selected ? 'selected' : ''}>o</span>
    </button>
  );
};

export default ToggleButton;
