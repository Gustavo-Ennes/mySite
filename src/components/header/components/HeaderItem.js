import { Button, Grid, styled } from "@mui/material";

import { useTransition } from "../../../context/TransitionContext";

const StyledGrid = styled(Grid)(() => ({
  height: "calc(100vh / 6)",
  backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, 0.3)`,
}));

const StyledButton = styled(Button)(() => ({
  height: "100%",
  width: "100%",
}))

export const HeaderItem = ({ title }) => {
  const { component, setComponent, setOldComponent } = useTransition();

  const handleClick = () => {
    if (title !== component) {
      setOldComponent(component);
      setComponent(title);
    }
  };

  return (
    <StyledGrid item xs>
      <StyledButton onClick={handleClick}>{title}</StyledButton>
    </StyledGrid>
  );
};
