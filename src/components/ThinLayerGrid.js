import { Grid, styled } from "@mui/material";

export const ThinLayerGrid = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color }) => ({
  backgroundColor: `rgba(${color === "blue" ? "160" : "255"}, ${
    color === "blue" ? "160" : "255"
  }, 255, 0.75)`,
  minHeight: "100vh",
  position: "relative",
}));
