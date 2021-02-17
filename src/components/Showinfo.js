import React, { useState, useEffect } from 'react';

const Showinfo = () => {
  const [show, setShow] = useState({});

  console.log(show);
  useEffect(() => {
    fetch('http://api.tvmaze.com/shows/2').then(res => res.json()).then(data => setShow(data));
  }, []);

  const {
    name, summary,
  } = show;

  return (
    <div className="showinfo">
      <div className="showinfocont d-block d-md-flex">
        <div className="showdetails bg-light">
          <h3>{name}</h3>
          <p className="text-justify">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showinfo;
