import { useEffect } from "react";

import { contactLinks } from "../../../components/appbar/links";
import {
  nameIconClasses,
  NameTypography,
  PositionTypography,
  positionIconClasses,
  StyledBox,
  WhiteI,
  YellowI,
  IconTypography,
  WhiteIcon,
  StyledLink,
} from "../style";

const NameBox = () => {
  const ids = contactLinks.map(({ name }) => `#${name}`);
  const querySelectorIds = `${ids[0]}, ${ids[1]}, ${ids[2]}, ${ids[3]}`;

  useEffect(() => {
    const elements = document.querySelectorAll(querySelectorIds);
    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add("animate__animated", "animate__flipInX");
      });
      element.addEventListener("animationend", () => {
        element.classList.remove("animate__animated", "animate__flipInX");
      });
    });
  });

  return (
    <StyledBox>
      <NameTypography>
        <WhiteI className={nameIconClasses}></WhiteI> gustavo ennes
      </NameTypography>
      <IconTypography>
        {contactLinks.map(({ name, url, iconClass }) => (
          <StyledLink key={url} href={url} target="_blank">
            <WhiteIcon className={iconClass} id={name} />
          </StyledLink>
        ))}
      </IconTypography>
      <PositionTypography>
        <YellowI className={positionIconClasses}></YellowI> full-stack
      </PositionTypography>
    </StyledBox>
  );
};

export { NameBox };
