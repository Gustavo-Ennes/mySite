import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  styled,
  Link,
} from "@mui/material";

import { YELLOW, DARK_GRAY } from "../../utils/colors";

const StyledAvatar = styled(Avatar)(() => ({
  height: "5vh",
  width: "5vh",
}));

const StyledAppBar = styled(MuiAppBar)(() => ({
  position: "static",
  backgroundColor: YELLOW,
  color: DARK_GRAY,
  height: "9vh",
}));

const DesktopIcon = styled("i")(({ theme: { breakpoints } }) => ({
  display: "none",
  [breakpoints.up("md")]: {
    display: "flex",
  },
  marginRight: 10,
  color: "teal"
}));

const DesktopTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  marginRight: 2,
  display: "none",
  [breakpoints.up("md")]: {
    display: "flex",
  },
  fontFamily: "'Righteous', cursive",
  fontWeight: 700,
  letterSpacing: "0.3rem",
  color: "inherit",
  textDecoration: "none",
}));

const MobileTypography = styled(DesktopTypography)(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    [breakpoints.up("md")]: {
      display: "none",
    },
    margin: "auto",
    width: "100%",
  })
);

const DesktopMenu = styled(Menu)(({ theme: { breakpoints } }) => ({
  display: "block",
  [breakpoints.up("md")]: {
    display: "none",
  },
  fontFamily: "'Shadows Into Light', cursive",
  "& .MuiPaper-root": {
    backgroundColor: "teal",
    color: YELLOW,
  },
  "& .MuiMenuItem-root:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    color: "teal",
  },
}));

const MobileBox = styled(Box)(({ theme: { breakpoints } }) => ({
  flexGrow: 1,
  display: "none",
  [breakpoints.up("md")]: {
    display: "flex",
  },
}));

const DesktopBox = styled(MobileBox)(({ theme: { breakpoints } }) => ({
  display: "flex",
  [breakpoints.up("md")]: {
    display: "none",
  },
}));

const MobileButton = styled(Button)(() => ({
  marginTop: 2,
  marginBottom: 2,
  color: DARK_GRAY,
  display: "block",
}));

const AvatarBox = styled(Box)(() => ({
  flexGrow: 0,
}));

const AvatarIconButton = styled(IconButton)(() => ({
  padding: 0,
}));

const StyledAvatarMenu = styled(Menu)(() => ({
  marginTop: "45px",
  fontFamily: "'Shadows Into Light', cursive",
  "& .MuiPaper-root": {
    backgroundColor: "teal",
    color: YELLOW,
  },
  "& .MuiMenuItem-root:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    color: "teal",
  },
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: YELLOW,
}));

const desktopIconClass = "fa-solid fa-hat-wizard";

export {
  desktopIconClass,
  StyledAppBar,
  StyledAvatar,
  DesktopIcon,
  MobileBox,
  MobileButton,
  MobileTypography,
  DesktopMenu,
  DesktopBox,
  DesktopTypography,
  AvatarBox,
  AvatarIconButton,
  StyledAvatarMenu,
  StyledLink,
};
