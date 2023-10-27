import { MapContainer, TileLayer,GeoJSON, Marker } from "react-leaflet";
import * as ortsevoAvramovo from '../../assets/json/data.json'


import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

export default function Map() {
  return (
    <section>
      <h3>Карта</h3>
      <MapContainer
        center={[41.963205, 23.729939]}
        zoom={12}
        scrollWheelZoom={false}
        className="map_container"
      >
      <TileLayer
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        maxZoom={17} // Optional: Set a maximum zoom level
        attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
      />

        <Marker position={[41.963205, 23.729939]} />
        <GeoJSON data={ortsevoAvramovo}></GeoJSON>
      </MapContainer>

      
    </section>
  );
}
