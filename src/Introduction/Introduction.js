import { Grid, Typography, styled } from "@mui/material";

const StyledTypography = styled(Typography)(() => ({
  marginTop: "35vh"
}));

export const Introduction = () => (
  <Grid container alignItems="center" justifyContent="center">
    <Grid item xs={12}>
      <StyledTypography align="center" variant="h2">GUSTAVO ENNES</StyledTypography>
      <Typography align="center" variant="h6">
        FULL-STACK JAVASCRIPT DEVELOPER
      </Typography>
    </Grid>
  </Grid>
);
