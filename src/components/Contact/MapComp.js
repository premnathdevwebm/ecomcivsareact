import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = L.icon({
  iconUrl: "/marker.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  const latitude = 12.83199;
  const longitude = 79.883;

  return (
    <div style={{ height: "400px", width: "600px" }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={markerIcon} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
