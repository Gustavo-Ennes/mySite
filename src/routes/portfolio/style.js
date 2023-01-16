import { Tabs, Card, CardMedia, styled } from "@mui/material";

import { YELLOW } from "../../utils/colors";

const StyledTabs = styled(Tabs)(() => ({
  margin: "30px 0",
  background: "teal",
  color: "white",
  "& .MuiTab-root": {
    color: "white",
  },
  "& .MuiTab-root.Mui-selected": {
    color: YELLOW,
  },
  "& .MuiTabs-indicator": {
    background: YELLOW,
  },
}));

const ProjectCard = styled(Card)(() => ({
  margin: "20px",
  border: "1px solid teal",
  "&:hover": {
    margin: "15px",
    background: "teal",
    color: YELLOW,
    cursor: "pointer",
    boxShadow: "1px 2px 10px white",
    border: `2px solid ${YELLOW}`,
  },
}));

const ProjectCardMedia = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: "56.25%",
}));

export { StyledTabs, ProjectCard, ProjectCardMedia };
