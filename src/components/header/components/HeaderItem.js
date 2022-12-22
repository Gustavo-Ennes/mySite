import { Button, Grid, styled } from "@mui/material";

import { useMenuAnimationHandlers } from "./useMenuAnimationHandlers";

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
  const spanId = `span${title}`;
  const { handleClick, handleMouseEnter, handleMouseLeave } = useMenuAnimationHandlers({
    title,
    spanId,
  });

  return (
    <StyledGrid item xs>
      <StyledButton
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span id={spanId}>{title}</span>
      </StyledButton>
    </StyledGrid>
  );
};
