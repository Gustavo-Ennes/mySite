import { Grid, Typography, styled } from "@mui/material";
import { FullHeightDesktopGrid } from "../components/FullHeightDesktopGrid";
import { PhotoContainer } from "./components/PhotoContainer";
import { TextContainer } from "./components/TextContainer";

const StyledTypography = styled(Typography)(() => ({
  verticalAlign: "middle",
  padding: "35vh 0 0 0",
}));

export const About = () => (
  <Grid container>
    <FullHeightDesktopGrid item xs={12} md={6}>
      <PhotoContainer />
    </FullHeightDesktopGrid>
    <FullHeightDesktopGrid item xs={12} md={6}>
      <TextContainer />
    </FullHeightDesktopGrid>
  </Grid>
);
