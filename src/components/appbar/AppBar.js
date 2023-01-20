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

import { SmoothScrollingLink } from ".";
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
  StyledAvatarMenu,
  StyledLink,
} from "./style";
import { 
  sectionLinks,
  contactLinks
} from './links'

import MyImage from "../../assets/img/profile-img.jpg";

function AppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="static">
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
              open={!!anchorElNav}
            >
              {sectionLinks.map((section) => (
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <SmoothScrollingLink
                    page={section}
                    to={section.toLowerCase()}
                    afterFunction={handleCloseNavMenu}
                  />
                </MenuItem>
              ))}
            </DesktopMenu>
          </DesktopBox>
          <MobileTypography variant="h5" noWrap component="a" href="">
            ENNES
          </MobileTypography>
          <MobileBox>
            {sectionLinks.map((section) => (
              <MobileButton key={section}>
                <SmoothScrollingLink
                  page={section}
                  to={section.toLowerCase()}
                  onClick={handleCloseNavMenu}
                />
              </MobileButton>
            ))}
          </MobileBox>

          <AvatarBox>
            <Tooltip title="Contacts">
              <AvatarIconButton onClick={handleOpenUserMenu}>
                <StyledAvatar alt="Gustavo Ennes" src={MyImage} />
              </AvatarIconButton>
            </Tooltip>
            <StyledAvatarMenu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {contactLinks.map(({ name, url }) => (
                <MenuItem key={url} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <StyledLink href={url} target="_blank">
                      {name}
                    </StyledLink>
                  </Typography>
                </MenuItem>
              ))}
            </StyledAvatarMenu>
          </AvatarBox>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export { AppBar };

// TODO fix mobile
