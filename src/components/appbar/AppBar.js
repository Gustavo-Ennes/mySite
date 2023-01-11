import { useState } from "react";

import { Menu as MenuIcon } from "@mui/icons-material";
import {
  Toolbar,
  IconButton,
  Typography,
  Container,
  Tooltip,
  MenuItem,
} from "@mui/material";

import {
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
} from "./style";

import MyImage from "../../assets/img/profile-img.jpg";

const pages = ["Home", "About", "Resume", "Portfolio", "Contact"];

function AppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopIcon className={desktopIconClass} />
          <DesktopTypography variant="h6" noWrap component="a" href="/">
            ENNES
          </DesktopTypography>

          <DesktopBox>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <DesktopMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </DesktopMenu>
          </DesktopBox>
          <MobileTypography variant="h5" noWrap component="a" href="">
            ENNES
          </MobileTypography>
          <MobileBox>
            {pages.map((page) => (
              <MobileButton key={page} onClick={handleCloseNavMenu}>
                {page}
              </MobileButton>
            ))}
          </MobileBox>

          <AvatarBox>
            <Tooltip title="Open settings">
              <AvatarIconButton>
                <StyledAvatar alt="Remy Sharp" src={MyImage} sizes="" />
              </AvatarIconButton>
            </Tooltip>
          </AvatarBox>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export { AppBar };
