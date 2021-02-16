import React from 'react';
import Navlogo from '../images/navlogo.png';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg px-4 position-fixed">
      <img src={Navlogo} alt="tvshowlogo" style={{ width: '35px', height: '35px' }} />
      <h5 className="ml-3 text-white">TVWORLD</h5>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-light" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto text-center">
          <li className="nav-item active mr-2">
            <a className="nav-link text-white" href="#home">
              <i className="fas fa-home mr-1" />
              Home
            </a>
          </li>
          <li className="nav-item mr-2">
            <a className="nav-link text-white" href="#home">
              <i className="fas fa-tv mr-1" />
              TV shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">
              <i className="fas fa-info-circle mr-1" />
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
