import { Grid } from "@mui/material";

import { StyledTypography, ContainerGrid } from "./style";

const Maintenance = () => (
  <ContainerGrid
    container
    justify="center"
    alignItems="center"
    style={{ height: "100vh" }}
  >
    <Grid item xs={12}>
      <StyledTypography>
        <i className="fa-solid fa-triangle-exclamation animate__animated animate__fadeInDown animate__faster"></i>
      </StyledTypography>
      <StyledTypography className="animate__animated animate__fadeInDown ">
        under maintenance
      </StyledTypography>
    </Grid>
  </ContainerGrid>
);

export { Maintenance };
