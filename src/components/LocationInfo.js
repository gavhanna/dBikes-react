import React from 'react'
import classnames from "classnames";

const LocationInfo = (props) => {
  return (
    <div
      className={classnames("location", {
        "hide-info": !props.isLocationSelected
      })}
    >
      {!props.location.address ? <h2>Please select a location on the map</h2> :
        <p>{props.location.address}</p>}
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
        <span
          className={classnames("green", {
            "red": props.location.status === "CLOSED"
          })}
        >{props.location.status}
        </span>
        <span
          title={props.location.banking ? "Machine accepts credit cards" : "Machine does not accept credit cards"}
          id="status-banking"
        >
          {
            props.location.number ?
              props.location.banking ?
                <span style={{ color: "#65bf68" }}><i className="far fa-credit-card"></i></span> :
                <span style={{ color: "salmon" }}><i className="far fa-credit-card"></i></span>
              : <span></span>
          }

        </span>
      </div>
    </div>
  )
}

export default LocationInfo;