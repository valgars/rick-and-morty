import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Rick and Morty App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Characters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Episodes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Locations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">My Watch List</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;