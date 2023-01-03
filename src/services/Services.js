import { Grid, Typography, styled } from "@mui/material";
import { MainFrameContainer } from "../components/mainFrame/MainFrameContainer";
import { ThinLayerGrid } from "../components/ThinLayerGrid";

const StyledTypography = styled(Typography)(() => ({
  verticalAlign: "middle",
  padding: "35vh 0 0 0",
}));

export const Services = () => (
  <MainFrameContainer disableGutters>
    <ThinLayerGrid item xs={12} color="white" >
      asd
    </ThinLayerGrid>
  </MainFrameContainer>
)