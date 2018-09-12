import React from 'react'

const Navbar = (props) => {
  return (
    <div id="navbar-wrapper">
      <nav id="navbar">
        <div className="nav left">
          <h1>Dublin Bikes</h1>
        </div>
        <div className="nav-right">
          <span
            id="info-button"
            onClick={props.onMenuClick}
          >
            {props.infoOpen ? <i className="fas fa-times"></i> : <i className="fas fa-info"></i>}
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;