import { Grid, Typography, styled } from "@mui/material";

import { YELLOW } from "../../utils/colors";

const FlexGrid = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "15vh",
}));

const Hello = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: "140px",
  color: YELLOW,
  textShadow: "3px 3px teal",
  textAlign: "center",
  fontFamily: "'Righteous', cursive",
  lineHeight: "4rem",
  [breakpoints.down("sm")]: {
    fontSize: "80px",
    lineHeight: "0.4rem",
  },
}));

const FluidImage = styled("img")(({ theme: { breakpoints } }) => ({
  width: "90vw",
  [breakpoints.up("md")]: {
    width: "70vw",
  },
  [breakpoints.up("lg")]: {
    width: "50vw",
  },
  [breakpoints.up("xl")]: {
    width: "40vw",
  },
  height: "auto",
}));

const TextTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: "22px",
  fontFamily: "'Space Mono', monospace",
  color: YELLOW,
  letterSpacing: "0.2rem",
  lineHeight: "4rem",
  padding: 0,
  [breakpoints.down("md")]: {
    fontSize: "14px",
    letterSpacing: "0.1rem",
    lineHeight: "3rem",
  },
  [breakpoints.down("sm")]: {
    fontSize: "9.5px",
    letterSpacing: "0.01rem",
    lineHeight: "1.2rem",
  },
}));

export { FlexGrid, Hello, FluidImage, TextTypography };
