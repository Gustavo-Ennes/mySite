import { Grid, styled } from "@mui/material";

export const FullHeightMainFrame = styled(Grid)(
  ({ theme: { breakpoints } }) => ({
    height: "90vh",
    width: "100%",
    [breakpoints.up("md")]: {
      height: "100vh",
    },
  })
);
