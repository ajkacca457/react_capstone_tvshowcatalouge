import React from 'react';
import GridLoader from 'react-spinners/GridLoader';

const Loading = () => (
  <div className="loading">
    <div className="bg-white  p-4 rounded text-center">
      <GridLoader color="red" />
      <h4 className="text-danger">Loading Shows ....</h4>
    </div>
  </div>
);

export default Loading;
