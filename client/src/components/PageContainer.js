import React from 'react';
import { Link } from 'react-router-dom';

const PageContainer = ({ currentPage }) => {
  return (
    <div>
      <Link to={`/photos?page=${currentPage - 1}`}>Previous</Link>
      <Link to={`/photos?page=${currentPage + 1}`}>Next</Link>
    </div>
  );
};

export default PageContainer;
