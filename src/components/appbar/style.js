import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  styled,
} from "@mui/material";

import { YELLOW } from "../../utils/colors";

const StyledAvatar = styled(Avatar)(() => ({
  height: "5vh",
  width: "5vh",
}));

const StyledAppBar = styled(MuiAppBar)(() => ({
  position: "static",
  backgroundColor: YELLOW,
  color: "#333",
  height: "9vh",
}));

const DesktopIcon = styled("i")(({ theme: { breakpoints } }) => ({
  display: "none",
  [breakpoints.up("md")]: {
    display: "flex",
  },
  marginRight: 1,
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
  display: "none",
  [breakpoints.up("md")]: {
    display: "flex",
  },
  fontFamily: "'Shadows Into Light', cursive",
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
  color: "#333",
  display: "block",
}));

const AvatarBox = styled(Box)(() => ({
  flexGrow: 0,
}));

const AvatarIconButton = styled(IconButton)(() => ({
  padding: 0,
}));

const desktopIconClass = "fa-brands fa-connectdevelop";

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
};
