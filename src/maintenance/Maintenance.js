import { Box, Grid, styled, Typography } from "@mui/material";

import { YELLOW } from "../utils/colors";

const StyledBox = styled(Box)(() => ({
  height: "100%",
  backgroundColor: "#999",
  padding: "20px",
  textAlign: "center",
  top: "50%",
}));

const StyledTypography = styled(Typography)(({ theme: { breakpoints } }) => ({
  fontSize: "35px",
  color: "#333",
  textShadow: `3px 3px ${YELLOW}`,
  lineHeight: "1rem",
  [breakpoints.up("md")]: {
    fontSize: "55px",
  },
  [breakpoints.up("lg")]: {
    fontSize: "95px",
  },
  [breakpoints.up("xl")]: {
    fontSize: "145px",
  },
}));

const FullHeightGrid = styled(Grid)(() => ({
  height: "100%",
}));

const Maintenance = () => (
  <FullHeightGrid container alignItems="center" justifyContent="center">
    <Grid item xs={12}>
      <StyledBox>
        <StyledTypography>
          <p>
            <i className="fa-solid fa-triangle-exclamation"></i>
          </p>
          <p>under maintenance</p>
        </StyledTypography>
      </StyledBox>
    </Grid>
  </FullHeightGrid>
);

export { Maintenance };
