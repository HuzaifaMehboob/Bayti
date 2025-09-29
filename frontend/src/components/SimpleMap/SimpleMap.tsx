import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

interface SimpleMapProps {
  height?: string; 
  width?: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ height = "100%", width = "100%" }) => {
  const mapRef = useRef<LeafletMap | null>(null);

  const latitude = 51.505;
  const longitude = -0.09;

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height, width }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default SimpleMap;
