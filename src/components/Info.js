import React from 'react'
import classnames from "classnames";

const Info = (props) => {

  const location =
    <div className="location">
      <h2>{props.location.address}</h2>
    </div>


  return (
    <div>

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
            <span>Bikes</span>
          </span>
          <span className="availability-info">
            <span
              className={classnames("count", {
                "red": props.location.available_bike_stands < 4
              })}
            >{props.location.available_bike_stands}</span>
            <span>Spaces</span>
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
      }
    </div>
  )
}

export default Info;