import { Button, styled } from "@mui/material";

import { useMenuAnimationHandlers } from "./useMenuAnimationHandlers";



const StyledButton = styled(Button)(() => ({
  height: "100%",
  width: "100%",
  color: "white",
  fontSize: "10px",
}));

export const HeaderItem = ({ title }) => {
  const spanId = `span${title}`;
  const { handleClick, handleMouseEnter, handleMouseLeave } =
    useMenuAnimationHandlers({
      title,
      spanId,
    });

  return (
      <StyledButton
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span id={spanId}>{title}</span>
      </StyledButton>
  );
};
