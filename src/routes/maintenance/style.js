import { Grid, styled } from "@mui/material";

import { YELLOW } from "../../utils/colors";

const StyledTypography = styled("p")(({ theme: { breakpoints } }) => ({
  fontSize: "35px",
  color: YELLOW,
  textShadow: `3px 3px teal`,
  textAlign: "center",
  height: "100%",
  [breakpoints.up("md")]: {
    fontSize: "55px",
  },
  [breakpoints.up("lg")]: {
    fontSize: "95px",
  },
  [breakpoints.up("xl")]: {
    fontSize: "145px",
  },
}));

const ContainerGrid = styled(Grid)(() => ({
  height: "100vh",
}));

export { StyledTypography, ContainerGrid };
