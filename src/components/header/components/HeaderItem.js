import { Button, Grid, styled } from "@mui/material";

const StyledGrid = styled(Grid)(() => ({
  height: "calc(100vh / 6)",
  backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, 0.3)`,
}));

export const HeaderItem = ({ title, setComponent }) => (
  <StyledGrid item xs>
    <Button onClick={() => setComponent(`div${title}`)}>{title}</Button>
  </StyledGrid>
);
