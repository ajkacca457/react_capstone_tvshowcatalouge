import React, { useState, useEffect } from 'react';
import Showitem from './Showitem';

const Showlist = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('http://api.tvmaze.com/shows').then(res => res.json()).then(data => setShows(data));
  }, []);
  return (
    <div className="showlist">
      <div className="showcont">
        {shows.map(item => (
          <Showitem key={item.id} show={item} />
        ))}
      </div>
    </div>
  );
};

export default Showlist;
