import { Container, styled } from "@mui/material";
import hero from "../../assets/img/hero-bg.jpg";

export const MainFrameContainer = styled(Container)(() => ({
  minWidth: "100%",
  position: "fixed",
  overflow: "hidden",
  backgroundImage: `url(${hero})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "100vh",
}));
