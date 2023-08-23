import {
  Box,
  Typography,
  Slider,
  Button,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { fetchData } from "../services/api";
import { useState } from "react";

interface BufferMapControlsProps {
  bufferDistance: number;
  setBufferDistance: (value: number) => void;
  selectedPoint: L.LatLng | null;
}

export const BufferMapControls: React.FC<BufferMapControlsProps> = ({
  bufferDistance,
  setBufferDistance,
  selectedPoint,
}) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState<{
    totalPopulation: 0;
    averageIncome: 0;
  } | null>(null);

  const handleOnClick = async () => {
    try {
      setLoading(true);
      const requestData = {
        selectedLatitude: selectedPoint?.lat,
        selectedLongitude: selectedPoint?.lng,
        bufferDistance: bufferDistance * 1000,
      };
      const response = await fetchData(requestData);
      setResponseData(response);
      setLoading(false);
      console.log("Response data:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Select a Point and Set Buffer Distance
      </Typography>
      <Box
        sx={{
          border: `2px solid ${theme.palette.primary.main}`,
          width: "60%",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            Buffer Distance (km):
          </Typography>
          <Slider
            aria-label="Temperature"
            value={bufferDistance}
            valueLabelDisplay="auto"
            step={2}
            marks
            min={0}
            max={50}
            onChange={(e, value) => setBufferDistance(value as number)}
            sx={{
              maxWidth: "300px",
              marginX: "20px",
            }}
          />
          <Box
            sx={{
              border: `2px solid ${theme.palette.secondary.main}`,
              color: theme.palette.primary.main,
              padding: "10px",
            }}
          >
            {bufferDistance} Km
          </Box>
        </Box>
        <Button
          variant="contained"
          onClick={handleOnClick}
          sx={{ marginBottom: "10px" }}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <CircularProgress size={24} /> // Show spinner while loading
          ) : (
            "Request Data"
          )}
        </Button>
        {responseData && (
          <Box sx={{ color: theme.palette.primary.main }}>
            <Typography variant="h6" gutterBottom>
              Data Summary
            </Typography>
            <Typography>
              Total Population: {responseData.totalPopulation.toLocaleString()}
            </Typography>
            <Typography>
              Average Income: ${responseData.averageIncome.toLocaleString()}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
