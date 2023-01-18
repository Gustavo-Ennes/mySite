import { Typography, styled } from "@mui/material";

import { YELLOW } from "../utils/colors";

const TitleTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: "100px",
  paddingBottom: "50px",
  color: YELLOW,
  textShadow: "3px 3px teal",
  fontFamily: "'Righteous', cursive",
  paddingLeft: "25px",
  [breakpoints.down("sm")]: {
    fontSize: "50px",
    textAlign: "center",
    padding: 0,
  },
  [breakpoints.down("lg")]: {
    fontSize: "75px",
    textAlign: "center",
  },
  [breakpoints.up("lg")]: {},
}));

export { TitleTypography };
