import React from 'react'
import classnames from "classnames";

const Navbar = (props) => {
  return (
    <div id="navbar-wrapper">
      <nav id="navbar">
        <div className="nav left">
          <h1>Dublin Bikes</h1>
        </div>
        <div className="nav-right">
          <span
            title="Refresh Bikes Data"
            onClick={props.getDublinBikesData}
            className={classnames("nav-button", {
              "loading": props.updating
            })}
          >
            <i className="fas fa-sync-alt"></i>
          </span>
          <span
            id="info-button"
            onClick={props.onMenuClick}
          >
            {props.infoOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;