import { Grid, Typography, styled } from "@mui/material";
import { MainFrameContainer } from "../components/mainFrame/MainFrameContainer";
import { ThinLayerGrid } from "../components/ThinLayerGrid";

const StyledTypography = styled(Typography)(() => ({
  verticalAlign: "middle",
  padding: "35vh 0 0 0",
}));

export const Introduction = () => (
  <MainFrameContainer disableGutters>
    <Grid container>
      <ThinLayerGrid item xs={12} color="white">
        <StyledTypography align="center" variant="h2" paragraph>
          GUSTAVO ENNES
        </StyledTypography>
        <Typography align="center" variant="h6">
          FULL-STACK JAVASCRIPT DEVELOPER
        </Typography>
      </ThinLayerGrid>
    </Grid>
  </MainFrameContainer>
);
