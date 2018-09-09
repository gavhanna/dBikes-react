import React from 'react'

const AppInfo = () => {
  return (
    <div id="info">
      <div className="info-container">
        <h2>Dublin Bikes </h2>
        <h3>How to use this app</h3>
        <h4>Icon Colours</h4>
        <p><span style={{ color: "red" }}>Red</span>&lt; 4 bikes</p>
        <p><span style={{ color: "lime" }}>Green</span> &lt; 4 spaces</p>
        <p><span style={{ color: "#209cee" }}>Blue</span> lots of both</p>
        <p>When you select a location, a Street View of the area will appear (this is not a live view)</p>
      </div>
    </div>
  )
}

export default AppInfo;