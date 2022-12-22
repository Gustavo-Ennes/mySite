import { Grid, styled } from "@mui/material";

export const FullHeightHeader = styled(Grid)(({ theme: { breakpoints } }) => ({
  height: "10vh",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  [breakpoints.up("md")]: {
    height: "100vh",
  },
}));
