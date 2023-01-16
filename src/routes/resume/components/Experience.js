import {
  Business as BusinessIcon,
  AccessTime as AccessTimeIcon,
  OpenInNew as OpenInNewTabIcon,
} from "@mui/icons-material";
import { Link, List } from "@mui/material";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledListItem,
  DateTypography,
  ItemTypography,
  VisitTypography,
  CompanyTypography,
  PositionTypography,
} from "./style";

const Experience = ({ date, company, position, items, href }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <PositionTypography variant="h5" component="h2">
          {position}
        </PositionTypography>
        <CompanyTypography variant="subtitle1" component="p" gutterBottom>
          <BusinessIcon fontSize="small" /> {company}
        </CompanyTypography>
        <DateTypography variant="subtitle2" component="p" gutterBottom>
          <AccessTimeIcon fontSize="small" /> {date}
        </DateTypography>
        <List>
          {items.map((item, index) => {
            return (
              <StyledListItem key={index}>
                <ItemTypography variant="body2">{item}</ItemTypography>
              </StyledListItem>
            );
          })}
        </List>
      </StyledCardContent>
      <StyledCardActions>
        <Link
          underline="none"
          href={href}
          target="_blank"
          color="inherit"
          justifyContent="center"
          alignItems="center"
        >
          <VisitTypography variant="subtitle1">
            Visit {company} <OpenInNewTabIcon sx={{ fontSize: "18px" }} />
          </VisitTypography>
        </Link>
      </StyledCardActions>
    </StyledCard>
  );
};

Experience.propTypes = {
  date: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  href: PropTypes.string,
};

export { Experience };
