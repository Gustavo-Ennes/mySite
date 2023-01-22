import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, MenuItem } from "@mui/material";
import PropTypes from 'prop-types'

import { sectionLinks } from "../links";
import {
  desktopIconClass,
  DesktopIcon,
  DesktopMenu,
  DesktopBox,
  DesktopTypography,
} from "../style";
import { SmoothScrollingLink } from "./SmoothScrollingLink";

const MobileAppbarFragment = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}) => (
  <>
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
        {sectionLinks.map(({ name, iconClass }) => (
          <MenuItem key={name} onClick={handleCloseNavMenu}>
            <SmoothScrollingLink
              iconClass={iconClass}
              page={name}
              to={name.toLowerCase()}
              afterFunction={handleCloseNavMenu}
            />
          </MenuItem>
        ))}
      </DesktopMenu>
    </DesktopBox>
  </>
);

MobileAppbarFragment.propTypes = {
  handleOpenNavMenu: PropTypes.func.isRequired,
  handleCloseNavMenu: PropTypes.func.isRequired,
  anchorElNav: PropTypes.object  ,
}

export { MobileAppbarFragment };
