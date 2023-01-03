import { Grid, styled } from "@mui/material";

import { FullHeightHeader } from "./components/FullHeightHeader";
import { HeaderItem } from "./components/HeaderItem";

const StyledGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  [breakpoints.up("md")]: {
    height: "calc(100vh / 6)",
  },
}));

const Header = ({ items }) => (
  <FullHeightHeader
    container
    xs={12}
    md={1}
    sx={{ backgroundColor: "#939393" }}
    justifyContent="center"
    alignItems="center"
  >
    {items.map((title) => (
      <StyledGrid item xs md={12}>
        <HeaderItem key={title} title={title} />
      </StyledGrid>
    ))}
  </FullHeightHeader>
);
export { Header };
