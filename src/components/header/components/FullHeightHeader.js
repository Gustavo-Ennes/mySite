import { Grid, styled } from "@mui/material";

export const FullHeightHeader = styled(Grid)(({ theme: { breakpoints } }) => ({
  height: "10vh",
  [breakpoints.up("md")]: {
    height: "100vh",
  },
}));
