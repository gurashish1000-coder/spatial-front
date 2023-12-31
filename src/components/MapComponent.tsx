import React from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box } from "@mui/material";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface MapComponentProps {
  bufferDistance: number;
  setSelectedPoint: any;
  selectedPoint: L.LatLng | null;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  selectedPoint,
  setSelectedPoint,
  bufferDistance,
}) => {
  console.log("MapComponent selectedPoint: ", selectedPoint);

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
        }}
      >
        <MapContainer
          center={[33.17494, -96.59600]}
          zoom={12}
          style={{
            width: "80%",
            height: "70%",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapClickHandler setSelectedPoint={setSelectedPoint} />
          {selectedPoint && (
            <Marker position={selectedPoint} icon={customIcon}>
              <Popup>
                Selected Point: {selectedPoint.lat.toFixed(5)},{" "}
                {selectedPoint.lng.toFixed(5)}
              </Popup>
            </Marker>
          )}
          {selectedPoint && bufferDistance > 0 && (
            <Circle center={selectedPoint} radius={bufferDistance * 1000} />
          )}
        </MapContainer>
      </Box>
    </>
  );
};

interface MapClickHandlerProps {
  setSelectedPoint: React.Dispatch<React.SetStateAction<L.LatLng | null>>;
}

const MapClickHandler: React.FC<MapClickHandlerProps> = ({
  setSelectedPoint,
}) => {
  useMapEvents({
    click: (e) => {
      setSelectedPoint(e.latlng);
    },
  });

  return null;
};

export default MapComponent;
