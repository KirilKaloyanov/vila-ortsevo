import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import * as ortsevoBabyak from "../../assets/json/ortsevo-babyak.json";
import * as ortsevoZlataritsa from "../../assets/json/ortsevo-zlataritsa.json";
import * as ortsevoCircle from "../../assets/json/ortsevo-circle.json";
import * as ortsevoAvramovo from "../../assets/json/ortsevo-avramovo.json";
import house from "../../assets/png/house.png";
import hut from "../../assets/png/hut.png";
import pin from "../../assets/png/pin.png";
import css from "./touristMap.module.css";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

export default function Map() {
  const customIconHouse = new L.icon({
    iconUrl: house,
    iconSize: [28, 28],
  });

  const customIconHut = new L.icon({
    iconUrl: hut,
    iconSize: [28, 28],
  });

  const customIconPin = new L.icon({
    iconUrl: pin,
    iconSize: [28, 28],
  });

  return (
    <section className="paddingBottom">
      <h3>Пешеходни маршрути</h3>
      <MapContainer
        center={[41.977205, 23.729939]}
        zoom={12}
        scrollWheelZoom={false}
        className="map_container"
      >
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          maxZoom={17} // Optional: Set a maximum zoom level
          attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
        />

        <Marker position={[41.963205, 23.729939]} icon={customIconHouse}>
          <Popup>
            <span className={css.balloon}>Вила Орцево</span>
          </Popup>
        </Marker>
        <Marker position={[41.9729, 23.755446]} icon={customIconHut}>
          <Popup>
            <span className={css.balloon}>Заслон Велийца</span>
          </Popup>
        </Marker>
        <GeoJSON data={ortsevoBabyak} style={{ color: "red" }}>
          <Popup>
            <span className={css.balloon}>с. Орцево - вр. Бабяшка чука</span>
          </Popup>
        </GeoJSON>
        <Marker position={[41.963309, 23.673188]} icon={customIconPin}>
          <Popup>
            <span className={css.balloon}>Вр. Бабяшка Чука</span>
          </Popup>
        </Marker>

        <GeoJSON data={ortsevoZlataritsa} style={{ color: "green" }}>
          <Popup>
            <span className={css.balloon}>с. Орцево - с. Златарица</span>
          </Popup>
        </GeoJSON>
        <Marker position={[41.922077, 23.755452]} icon={customIconPin}>
          <Popup>
            <span className={css.balloon}>с. Златарица</span>
          </Popup>
        </Marker>

        <GeoJSON data={ortsevoCircle} style={{ color: "yellow" }}>
          <Popup>
            <span className={css.balloon}>
              с. Орцево - с. Черешово - с. Бабяк - с. Орцево
            </span>
          </Popup>
        </GeoJSON>

        <GeoJSON data={ortsevoAvramovo}>
          <Popup>
            <span className={css.balloon}>с. Орцево - с. Аврамово</span>
          </Popup>
        </GeoJSON>
        <Marker position={[42.036615, 23.820367]} icon={customIconPin}>
          <Popup>
            <span className={css.balloon}>ЖП гара Аврамово</span>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
