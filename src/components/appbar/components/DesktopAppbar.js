import PropTypes from "prop-types";

import { MobileBox, MobileButton, MobileTypography } from "../style";
import { sectionLinks } from "../links";
import { SmoothScrollingLink } from "./SmoothScrollingLink";

const DesktopAppbarFragment = ({ handleCloseNavMenu }) => (
  <>
    <MobileTypography variant="h5" noWrap component="a" href="">
      ENNES
    </MobileTypography>
    <MobileBox>
      {sectionLinks.map(({ name, iconClass }) => (
        <MobileButton key={name}>
          <SmoothScrollingLink
            page={name}
            to={name.toLowerCase()}
            onClick={handleCloseNavMenu}
          />
        </MobileButton>
      ))}
    </MobileBox>
  </>
);

DesktopAppbarFragment.propTypes = {
  handleCloseNavMenu: PropTypes.func.isRequired,
};

export { DesktopAppbarFragment };
