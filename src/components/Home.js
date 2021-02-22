import React from 'react';
import { Link } from 'react-router-dom';
import Tvshow1 from '../images/tvshow1.jpeg';
import Tvshow2 from '../images/tvshow2.jpg';

const Home = () => (
  <div className="home">
    <div className="content d-block d-lg-flex justify-content-between align-items-center">
      <div className="leftcont text-white text-center">
        <h2>TVWORLD</h2>
        <h3 className="my-2">Home of Your Entertainment</h3>
        <Link to="/shows" className="btn btn-warning rounded">Browse Shows</Link>
      </div>

      <div className="vr d-none d-lg-block" />

      <div className="rightcont d-none d-lg-block">
        <img src={Tvshow1} alt="Show1" className="tvshow s1" />
        <img src={Tvshow2} alt="Show1" className="tvshow s2" />
      </div>

    </div>

  </div>
);

export default Home;
