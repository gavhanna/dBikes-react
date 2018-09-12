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
            {props.infoOpen ? <i class="fas fa-times"></i> : <i class="fas fa-info"></i>}
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;