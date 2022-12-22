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
    document
      .getElementById(spanId)
      ?.classList.remove("animate__animated", "animate__pulse");
    document
      .getElementById(spanId)
      ?.classList.add("animate__animated", "animate__rubberBand");
    if (title !== component) {
      setOldComponent(component);
      setComponent(title);
    }
  };

  const handleMouseEnter = () => {
    document
      .getElementById(spanId)
      ?.classList.remove("animate__animated", "animate__rubberBand");
    document
      .getElementById(spanId)
      ?.classList.add(
        "animate__animated",
        "animate__pulse",
        "animate__duration__200ms"
      );
  };
  const onMouseLeave = () => {
    document
      .getElementById(spanId)
      ?.classList.remove(
        "animate__animated",
        "animate__pulse",
        "animate__rubberBand",
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
