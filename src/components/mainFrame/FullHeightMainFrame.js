import { Grid, styled } from "@mui/material";

export const FullHeightMainFrame= styled(Grid)(({ theme: { breakpoints } }) => ({
  height: "90vh",
  [breakpoints.up("md")]: {
    height: "100vh",
  },
}));