import { useState } from "react";

import { Toolbar, Container } from "@mui/material";

import { StyledAppBar } from "./style";

import { AvatarAppbarFragment, MobileAppbarFragment } from "./components";
import { DesktopAppbarFragment } from "./components/DesktopAppbar";

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
          <MobileAppbarFragment
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          <DesktopAppbarFragment handleCloseNavMenu={handleCloseNavMenu} />
          <AvatarAppbarFragment
            handleCloseUserMenu={handleCloseUserMenu}
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
          />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export { AppBar };
