import { Box } from "@mui/material";
import { useState } from "react";
import { BufferMapControls } from "../components/BufferMapControls";
import MapComponent from "../components/MapComponent";

export const MainLayout = () => {
  const [selectedPoint, setSelectedPoint] = useState<L.LatLng | null>(null);
  const [bufferDistance, setBufferDistance] = useState<number>(0.5);
  return (
    <Box style={{ backgroundColor: "#264653" }}>
      <BufferMapControls
        bufferDistance={bufferDistance}
        setBufferDistance={setBufferDistance}
        selectedPoint={selectedPoint}
      />
      <MapComponent
        selectedPoint={selectedPoint}
        setSelectedPoint={setSelectedPoint}
        bufferDistance={bufferDistance}
      />
    </Box>
  );
};
