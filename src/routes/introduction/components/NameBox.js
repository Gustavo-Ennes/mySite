import {
  nameIconClasses,
  NameTypography,
  PositionTypography,
  positionIconClasses,
  StyledBox,
  WhiteI,
  YellowI,
} from "../style";

const NameBox = () => (
  <StyledBox>
    <NameTypography>
      <WhiteI className={nameIconClasses}></WhiteI> gustavo ennes
    </NameTypography>
    <PositionTypography>
      <YellowI className={positionIconClasses}></YellowI> full-stack
    </PositionTypography>
  </StyledBox>
);

export { NameBox };
