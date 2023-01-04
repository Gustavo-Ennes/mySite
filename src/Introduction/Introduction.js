import { Grid, Typography, styled } from "@mui/material";

const StyledTitle = styled(Typography)(({ theme: { breakpoints } }) => ({
  marginTop: "35vh",
  textAlign: "center",
  fontSize: "56px",
  [breakpoints.up("md")]: {
    width: "92%",
  },
}));
const StyledSubtitle = styled(Typography)(({ theme: { breakpoints } }) => ({
  textAlign: "center",
  fontSize: "18px",
  [breakpoints.up("md")]: {
    width: "92%",
  },
}));

export const Introduction = () => (
  <Grid container alignItems="center" justifyContent="center">
    <Grid item xs={12}>
      <StyledTitle>GUSTAVO ENNES</StyledTitle>
      <StyledSubtitle align="center" variant="h6">
        FULL-STACK JAVASCRIPT DEVELOPER
      </StyledSubtitle>
    </Grid>
  </Grid>
);
