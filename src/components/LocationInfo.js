import React from 'react'
import classnames from "classnames";

const LocationInfo = (props) => {
  return (
    <div className="location">
      {!props.location.address ? <h2>Please select a location on the map</h2> :
        <h2>{props.location.address}</h2>}
      <div className="availability">
        <span className="availability-info">
          <span
            className={classnames("count", {
              "red": props.location.available_bikes < 4
            })}
          >{props.location.available_bikes}</span>
          {props.location.number ? <span>Bikes</span> : <span></span>}
        </span>
        <span className="availability-info">
          <span
            className={classnames("count", {
              "red": props.location.available_bike_stands < 4
            })}
          >{props.location.available_bike_stands}</span>
          {props.location.number ? <span>Spaces</span> : <span></span>}
        </span>
      </div>
      <div className="status">
        <p
          className={classnames("green", {
            "red": props.location.status === "CLOSED"
          })}
        >{props.location.status}</p>
      </div>
    </div>
  )
}

export default LocationInfo;