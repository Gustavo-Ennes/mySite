import { Grid, styled } from "@mui/material";

export const FullHeightDesktopGrid = styled(Grid)(
  ({ theme: { breakpoints } }) => ({
    [breakpoints.up("md")]: {
      minHeight: "100%",
    },
  })
);
