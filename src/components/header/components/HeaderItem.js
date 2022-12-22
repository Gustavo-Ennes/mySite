import { Button, Grid, styled } from "@mui/material";

import { useTransition } from "../../../context/TransitionContext";

const StyledGrid = styled(Grid)(() => ({
  height: "calc(100vh / 6)",
}));

const StyledButton = styled(Button)(() => ({
  height: "100%",
  width: "100%",
  color: "white",
  fontSize: "10px",
}));

export const HeaderItem = ({ title }) => {
  const { component, setComponent, setOldComponent } = useTransition();
  const spanId = `span${title}`;

  const handleClick = () => {
    if (title !== component) {
      setOldComponent(component);
      setComponent(title);
    }
  };

  const handleMouseEnter = () => {
    console.log("mouse enters");
    document
      .getElementById(spanId)
      ?.classList.add(
        "animate__animated",
        "animate__jello",
        "animate__duration__200ms"
      );
  };
  const onMouseLeave = () => {
    console.log("mouse leaves");
    document
      .getElementById(spanId)
      ?.classList.remove(
        "animate__animated",
        "animate__jello",
        "animate__duration__200ms"
      );
  };

  return (
    <StyledGrid item xs>
      <StyledButton
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={spanId}>{title}</span>
      </StyledButton>
    </StyledGrid>
  );
};
