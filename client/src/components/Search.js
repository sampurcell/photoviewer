import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSubmit }) => {

  const formatUrlParams = (values) => {
    const params = Object.keys(values).join('&');

    return `?${params}`;
  };

  return (
    <form id="search-photos" name="search-photos">
      <div className="search-icon"></div>
      <label for="width">Width</label>
      <input id="width-search" type="text" name="width" />
      <label for="height">Height</label>
      <input id="height-search" type="text" name="height" />
      <button onSubmit={handleSubmit}>Search</button>
    </form>
  );
};

export default Search;
