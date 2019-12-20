
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

const PhotoContainer = ({ grayscale }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gsParam = grayscale ? '?grayscale' : '';

    setIsLoading(true);
    fetch(`http://localhost:3010/photos${gsParam}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        setPhotos(response.photos);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="photo-container">
      {isLoading ? (<div>Loading...</div>) : photos.map(photo => { return <Photo url={photo} grayscale={grayscale} />})}
    </div>
  );
};

export default PhotoContainer;
