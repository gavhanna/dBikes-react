import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Map from "./components/GoogleMap";
import Info from "./components/Info";
import Streetview from "./components/Streetview";


class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      selectedLocation: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  componentDidMount = () => {
    console.log("getting locations");
    axios.get("https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=ef653629fed566ec812f1444f8bb2b3ddc6e1bbf")
      .then(res => this.setState({
        locations: res.data
      }))
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        let initialLocation = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        window.map.setCenter(initialLocation);
        new window.google.maps.Marker({
          position: { lat: position.coords.latitude, lng: position.coords.longitude },
          map: window.map,
          icon: "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=glyphish_user|65bf68|",
        });
      });
    }
  }

  onMarkerClick(marker) {
    console.log(marker.location);
    this.setState({
      selectedLocation: marker.location
    })
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>dBikes</h1>
        <main>
          <div className="left">
            <Map
              locations={this.state.locations}
              selectedLocation={this.state.selectedLocation}
              onMarkerClick={this.onMarkerClick} />
          </div>
          <div className="right">
            <Info
              location={this.state.selectedLocation} />
            <Streetview
              location={this.state.selectedLocation} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
