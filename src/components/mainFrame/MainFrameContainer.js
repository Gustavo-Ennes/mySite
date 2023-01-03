import { Container, styled } from "@mui/material";
import hero from "../../assets/img/hero-bg.jpg";

export const MainFrameContainer = styled(Container)(() => ({
  height: "100%",
  width: "100%",
  position: "fixed",
  overflow: "hidden",
  backgroundImage: `url(${hero})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  minHeight: "100vh",
}));
