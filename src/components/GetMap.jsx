import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
// import { LatLng } from 'leaflet';
import { Icon, LatLng } from 'leaflet';
import icon from '../images/icon-location.svg';

export default function Map({ lat, long }) {
  // const center = {
  //   lat: lat,
  //   lng: long,
  // };
  // const latitude = Number(lat);
  // const longitude = Number(long);

  // const center = new LatLng(latitude, longitude);
  const center = [lat, long];

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [32, 32], // size of the icon
  });

  return (
    <MapContainer center={center} zoom={19}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Marker position={center} icon={customIcon}>
        <Popup>
          <h1>This is your location</h1>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
