import { Typography, Tooltip, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

import {
  StyledAvatar,
  AvatarBox,
  AvatarIconButton,
  StyledAvatarMenu,
  StyledLink,
  StyledMenuIcon,
} from "../style";
import { contactLinks } from "../links";

import MyImage from "../../../assets/img/profile-img.jpg";

const AvatarAppbarFragment = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}) => (
  <>
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
        {contactLinks.map(({ name, url, iconClass }) => (
          <MenuItem key={url} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">
              <StyledLink href={url} target="_blank">
                <StyledMenuIcon className={iconClass} />
                {name}
              </StyledLink>
            </Typography>
          </MenuItem>
        ))}
      </StyledAvatarMenu>
    </AvatarBox>
  </>
);

AvatarAppbarFragment.propTypes = {
  handleOpenUserMenu: PropTypes.func.isRequired,
  handleCloseUserMenu: PropTypes.func.isRequired,
  anchorElUser: PropTypes.object,
};

export { AvatarAppbarFragment };
