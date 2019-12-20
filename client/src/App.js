import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton';
import Search from './components/Search';
import PhotoContainer from './components/PhotoContainer';

function App() {
  const [grayscaleSelected, setGrayscaleSelected] = useState(false);
  const [photoWidth, setPhotoWidth] = useState(null);
  const [photoHeight, setPhotoHeight] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Function that takes a selection state and sets the grayscale selection state.
  const onToggle = selected => {
    setGrayscaleSelected(!selected);
  };

  // Function that takes filtering options and returns photos that adhere to those filtering options.
  const filterPhotos = (filterOptions) => {};

  // Function that takes some pagination options and returns the next set of photos
  const getPhotos = () => {};

  const handleSubmit = () => {
    let searchForm = document.getElementById('search-photos');
    let formData = new FormData(searchForm);
    let gsParams = this.formatUrlParams(formData);

    fetch(`http://localhost:3010/photos${gsParams}`)
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
  };

  return (
    <div className="App">
      <header className="App-header">
        <ToggleButton onClick={onToggle} selected={grayscaleSelected}/>
        <Search handleSubmit={handleSubmit} />
      </header>
      <PhotoContainer grayscale={grayscaleSelected} />
    </div>
  );
}

export default App;
