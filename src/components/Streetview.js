import React, { Component } from 'react'

class Streetview extends Component {

  componentDidMount() {
    this.initializeStreetView(this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    this.initializeStreetView(nextProps.location)
  }

  initializeStreetView(location) {
    console.log(location);
    const google = window.google;
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("streetViewMap"), {
        position: location.position,
        pov: {
          heading: 34,
          pitch: 0
        }
      }
    );
    window.map.setStreetView(panorama);
  }


  render() {
    return (
      <div id="streetViewMap">

      </div>
    )
  }
}

export default Streetview;