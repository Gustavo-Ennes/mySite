import { Container, Grid, styled } from "@mui/material";

import profileImg from "../../assets/img/profile-img.jpg";
import { Badges } from "./Badges";

const StyledImg = styled("img")(() => ({
  maxHeight: "30%",
  maxWidth: "30%",
  position: "relative",
  left: "50%",
  transform: "translate(-50%,0)",
  padding: "20px 0px",
  borderRadius: "50%",
}));

export const PhotoContainer = () => (
  <Grid container justifyContent="center" alignItems="center">
    <Grid item xs={12}>
      <Container>
        <StyledImg src={profileImg} alt="Gustavo Ennes developer" />
      </Container>
    </Grid>
    <Grid item xs={12}>
      <Container>
        <Badges />
      </Container>
    </Grid>
  </Grid>
);
