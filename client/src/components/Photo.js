import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Photo = ({ url, grayscale }) => {
  const grayscaleParam = grayscale ? '?grayscale' : '';
  const [source, setSource] = useState(`${url}${grayscaleParam}`);

  useEffect(() => {
    const grayscaleParam = grayscale ? '?grayscale' : '';

    setSource(`${url}${grayscaleParam}`);
  });

  return (
    <div>
      <img src={source} />
    </div>
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  grayscale: PropTypes.bool.isRequired,
};

export default Photo;

