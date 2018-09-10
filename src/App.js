import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Map from "./components/GoogleMap";
import LocationInfo from "./components/LocationInfo";
import Streetview from "./components/Streetview";
import AppInfo from "./components/AppInfo";


class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      infoOpen: false,
      selectedLocation: {},
      isLocationSelected: false
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount = () => {
    console.log("getting locations");
    axios.get("https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=ef653629fed566ec812f1444f8bb2b3ddc6e1bbf")
      .then(res => this.setState({
        locations: res.data
      }))
    this.getCurrentPosition();
    window.map.addListener(window.map, "click", function(e) {
      this.onMapClick(e);
    })
  }
  
  onMapClick = (e) => {
      // this.setState({isLocationSelected: false})
    console.log(e.latLng)
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
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
    this.setState({
      selectedLocation: marker.location,
      isLocationSelected: true
    })
  }

  onMenuClick() {
    this.setState({ infoOpen: !this.state.infoOpen });
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>dBikes</h1>
        <main>
          <span onClick={this.onMenuClick} id="info-icon"></span>
          {this.state.infoOpen ? <AppInfo /> : <div style={{ display: "none" }}></div>}
          <div className="left">
            <Map
              locations={this.state.locations}
              selectedLocation={this.state.selectedLocation}
              onMarkerClick={this.onMarkerClick}
              onMapClick={this.onMapClick}/>
          </div>
          <div className="right">
          {this.state.isLocationSelected && <LocationInfo
              location={this.state.selectedLocation} />}
            
            
          </div>
        </main>
      </div>
    );
  }
}

export default App;
