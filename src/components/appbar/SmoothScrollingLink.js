import { Link } from "react-scroll";

const SmoothScrollingLink = ({ page, to, afterFunction }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-30}
    duration={750}
    onSetActive={afterFunction}
  >
    {page}
  </Link>
);

export { SmoothScrollingLink };
