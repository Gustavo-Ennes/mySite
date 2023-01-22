import { Box, Container, Typography, styled, Link } from "@mui/material";

import { YELLOW } from "../../utils/colors";
import { PageGrid } from "../../components";

const TechTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: "90px",
  verticalAlign: "baseline",
  color: YELLOW,
  textShadow: `4px 10px teal`,
  letterSpacing: "2rem",
  lineHeight: "8rem",
  fontFamily: "'Righteous', cursive",
  [breakpoints.down("sm")]: {
    fontSize: "28px",
    letterSpacing: "0.6rem",
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
    fontSize: "35px",
  },
}));

const IconTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  verticalAlign: "text-bottom",
  fontSize: "22px",
  color: "#ddd",
  textShadow: `2px 2px teal`,
  paddingRight: "20px",
  fontFamily: "'Space Mono', monospace",
  [breakpoints.down("sm")]: {
    fontSize: "25px",
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

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
}));

const WhiteIcon = styled("i")(({ theme: { breakpoints } }) => ({
  color: "white",
  padding: "10px 25px 0px 12px ",
  [breakpoints.down("sm")]: {
    padding: "10px 12px 0px 12px  ",
  },
}));

const WhiteI = styled("i")(() => ({
  color: "white",
}));

const YellowI = styled("i")(() => ({
  color: YELLOW,
}));

// just to show all effect at the same time
const PageGridWithoutMargin = styled(PageGrid)(() => ({
  margin: 0,
}));

const ContainerMaxHeight = styled(Container)(() => ({
  maxHeight: "100vh",
}));

const animationClass = "animate__animated animate__fadeInDown";
const animationDelay = "animate__delay-1s";
const nodeIconClasses = `${animationClass} fa-brands fa-node-js animate__faster`;
const reactIconClasses = `${animationClass} fa-brands fa-react`;
const apiIconClasses = `${animationClass} fa-solid fa-satellite animate__slower`;
const nameIconClasses = `${animationClass} ${animationDelay} fa-solid fa-ghost animate__faster`;
const positionIconClasses = `${animationClass} ${animationDelay} fa-solid fa-hat-wizard animate__slower`;

export {
  animationClass,
  animationDelay,
  ContainerMaxHeight,
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
  PageGridWithoutMargin,
  IconTypography,
  WhiteIcon,
  StyledLink,
};
