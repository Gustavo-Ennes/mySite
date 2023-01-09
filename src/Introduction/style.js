import { Box, Typography, styled } from "@mui/material";

import { YELLOW } from "../utils/colors";

const TechTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: "90px",
  verticalAlign: "baseline",
  color: YELLOW,
  textShadow: `4px 10px teal`,
  letterSpacing: "2rem",
  lineHeight: "8rem",
  fontFamily: "'Righteous', cursive",
  [breakpoints.down("sm")]: {
    fontSize: "35px",
    letterSpacing: "0.8rem",
    textShadow: `2px 5px teal`,
    lineHeight: "6rem",
  },
  [breakpoints.up("xl")]: {
    fontSize: "110px",
    letterSpacing: "2.5rem",
    lineHeight: "12rem",
  },
}));

const NameTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  verticalAlign: "text-bottom",
  fontSize: "60px",
  color: YELLOW,
  textShadow: `2px 2px teal`,
  paddingRight: "20px",
  fontFamily: "'Shadows Into Light', cursive",
  lineHeight: "1rem",
  [breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const PositionTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  verticalAlign: "text-bottom",
  fontSize: "32px",
  color: "#ddd",
  textShadow: `2px 2px teal`,
  paddingRight: "20px",
  fontFamily: "'Space Mono', monospace",
  [breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: "100%",
  textAlign: "right",
}));

const WhiteI = styled("i")(() => ({
  color: "white",
}));

const YellowI = styled("i")(() => ({
  color: YELLOW,
}));

const animationClass = "animate__animated animate__fadeInDown";
const animationDelay = "animate__delay-1s";
const nodeIconClasses = `${animationClass} fa-brands fa-node-js`;
const reactIconClasses = `${animationClass} fa-brands fa-react`;
const apiIconClasses = `${animationClass} fa-solid fa-satellite`;
const nameIconClasses = `${animationClass} ${animationDelay} fa-solid fa-ghost`;
const positionIconClasses = `${animationClass} ${animationDelay} fa-solid fa-hat-wizard`;

export {
  animationClass,
  animationDelay,
  nameIconClasses,
  positionIconClasses,
  apiIconClasses,
  nodeIconClasses,
  reactIconClasses,
  TechTypography,
  NameTypography,
  PositionTypography,
  StyledBox,
  WhiteI,
  YellowI,
};
