import { Link } from "react-scroll";

const SmoothScrollingLink = ({ page, to }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-30}
    duration={750}
  >
    {page}
  </Link>
);

export { SmoothScrollingLink };
