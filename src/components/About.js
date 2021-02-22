import React from 'react';
import Aboutimg from '../images/aboutimg.png';

const About = () => (
  <div className="about">

    <div className="abtcont bg-light">
      <h3>About TVWORLD</h3>
      <img src={Aboutimg} alt="about" className="aboutimg my-4" />
      <p className="text-justify">
        Join the millions of subscribers around the world who enjoy unlimited award-winning
        TV shows, movies, documentaries, and more without a single advertisement.
        As a TVWORLD member, you are charged once a month on the date you signed up.
        There are no contracts, no cancellation fees, and no commitments.
        You have the freedom to change your plan or cancel online at any time if
        you decide TVWORLD isn’t for you.
      </p>
    </div>

  </div>

);

export default About;
