import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from "react-leaflet";
import plovdivOrtsevo from "../../assets/json/Plovdiv-Ortsevo.json";
import sofiaOrtsevo from "../../assets/json/Sofia-VilaOrtsevo.json";
import house from "../../assets/png/house.png";
import pin from "../../assets/png/pin.png";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

export default function TrapnsportMap() {
  const customIconHouse = new L.icon({
    iconUrl: house,
    iconSize: [28, 28],
  });
  const customIconPin = new L.icon({
    iconUrl: pin,
    iconSize: [28, 28],
  });

  return (
    <section className="paddingBottom">
      <h3>Местоположение</h3>
      <MapContainer
        center={[42.303205, 23.729939]}
        zoom={9}
        scrollWheelZoom={false}
        className="map_container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[41.963205, 23.729939]} icon={customIconHouse} />
        <Marker position={[42.6977245, 23.3218762]} icon={customIconPin} />
        <Marker position={[42.1354016, 24.7452921]} icon={customIconPin} />

        <GeoJSON data={sofiaOrtsevo} style={{ color: "darkblue" }}>
          <Popup>
            <span className="balloon">София - Вила Орцево (187 км)</span>
          </Popup>
        </GeoJSON>

        <GeoJSON data={plovdivOrtsevo} style={{ color: "darkblue" }}>
          <Popup>
            <span className="balloon">Пловдив - Вила Орцево (150 км)</span>
          </Popup>
        </GeoJSON>
      </MapContainer>
    </section>
  );
}
