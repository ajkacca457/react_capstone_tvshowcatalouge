import React from 'react';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg  bg-info px-4">
      <a className="navbar-brand" href="#home">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#home">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">TV shows</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#home">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
