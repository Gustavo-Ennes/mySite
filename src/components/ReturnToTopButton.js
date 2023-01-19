import { useEffect } from "react";

import { ArrowCircleUp } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";
import { SmoothScrollingLink } from "./appbar";

const FixedIconButton = styled(IconButton)(() => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 5,
  padding: 0,
  margin: 0,
  lineHeight: "0rem",
  backgroundColor: "rgba(22, 255, 255, 0.12)",
  visibility: "hidden",
}));

const CustomArrowCircleUp = styled(ArrowCircleUp)(() => ({
  color: "rgba(255, 222, 0, 0.5)",
  fontSize: "45px",
}));

const ReturnToTopButton = () => {
  useEffect(() => {
    const element = document.getElementById("returnToTopButton");

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        element.style.visibility = "visible";
        element.classList.remove("animate__animated", "animate__fadeOutUp");
        element.classList.add("animate__animated", "animate__fadeInDown");
      }
      if (window.scrollY <= window.innerHeight) {
        element.classList.remove("animate__animated", "animate__fadeInDown");
        element.classList.add("animate__animated", "animate__fadeOutUp");
      }
    };

    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <div>
      <FixedIconButton aria-label="return to top" id="returnToTopButton">
        <SmoothScrollingLink page={<CustomArrowCircleUp />} to="home" />
      </FixedIconButton>
    </div>
  );
};

export { ReturnToTopButton };
