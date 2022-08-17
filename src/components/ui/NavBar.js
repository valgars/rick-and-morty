import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Rick and Morty</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">Episodes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watch-list">My Watch List</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;