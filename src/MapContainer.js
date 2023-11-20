import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import googleMapsKey from './components/pag/Maps'
import './mapa.css'
class MapContainer extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      top:'200px',
      
    };

    const mapStyles = {
      width: '80%',
      height: '40%',
      margin: '5%',
    };

    return (
      <div style={containerStyle}>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </Map>
      </div>
    );
  }
}


  export default GoogleApiWrapper({
    apiKey: googleMapsKey,
  })(MapContainer);
  