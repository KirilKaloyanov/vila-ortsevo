import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";

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
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[41.963205, 23.729939]} />

      </MapContainer>

    </section>
  );
}
