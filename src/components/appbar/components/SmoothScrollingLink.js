import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const StyledIcon = styled("i")(() => ({
  color: "white",
  marginRight: "10px",
}));

const SmoothScrollingLink = ({ page, to, afterFunction, iconClass }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-30}
    duration={750}
    onSetActive={afterFunction}
  >
    {iconClass && <StyledIcon className={iconClass} style={{}}></StyledIcon>}
    {page}
  </Link>
);

SmoothScrollingLink.propTypes = {
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  to: PropTypes.string.isRequired,
  afterFunction: PropTypes.func,
  iconClass: PropTypes.string,
};

export { SmoothScrollingLink };
