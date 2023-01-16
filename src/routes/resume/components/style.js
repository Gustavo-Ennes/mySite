import {
  CardActions,
  Card,
  CardContent,
  ListItem,
  Typography,
  styled,
} from "@mui/material";
import { DARK_GRAY, YELLOW } from "../../../utils/colors";

const StyledCard = styled(Card)(() => ({
  background: DARK_GRAY,
  color: YELLOW,
  minWidth: 275,
  border: "1px solid teal",
  margin: "10px",
  "&:hover": {
    background: "teal",
    color: YELLOW,
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  padding: "8px 16px 8px 16px",
}));

const StyledCardActions = styled(CardActions)(() => ({
  background: "teal",
  color: YELLOW,
  padding: "8px 16px 8px 16px",
  justifyContent: "flex-end",
}));

const StyledListItem = styled(ListItem)(() => ({
  padding: "4px 16px 4px 0",
}));

const PositionTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontFamily: "'Righteous', cursive",
  [breakpoints.down("sm")]: {
    fontSize: "15px",
  },
  [breakpoints.down("lg")]: {
    fontSize: "20px",
  },
  [breakpoints.up("lg")]: {
    fontSize: "25px",
  },
}));

const CompanyTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontFamily: "'Shadows Into Light', sans-serif",
  [breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  [breakpoints.down("lg")]: {
    fontSize: "17px",
  },
  [breakpoints.up("lg")]: {
    fontSize: "22px",
  },
}));

const DateTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontFamily: "'Righteous', cursive",
  [breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [breakpoints.down("lg")]: {
    fontSize: "13px",
  },
  [breakpoints.up("lg")]: {
    fontSize: "17px",
  },
}));

const ItemTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontFamily: "'Space Mono', monospace",
  [breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [breakpoints.down("lg")]: {
    fontSize: "12px",
  },
  [breakpoints.up("lg")]: {
    fontSize: "15px",
  },
}));

const VisitTypography = styled(CompanyTypography)(() => ({
  fontFamily: "'Righteous', cursive",
}));

export {
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledListItem,
  DateTypography,
  ItemTypography,
  VisitTypography,
  CompanyTypography,
  PositionTypography,
};
