import { Box, Container, Grid, useTheme, useMediaQuery } from "@mui/material";

import { PageGrid } from "../../components";
import gif from "../../assets/img/giphy.gif";
import { Badges, Text } from "./components/";
import { FlexGrid, Hello, FluidImage } from "./style";

const About = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.up("md"));
  
  return (
    <Container maxWidth="xl" id="about">
      <PageGrid container alignItems="center" justifyContent="center">
        <FlexGrid item xs={12}>
          <FluidImage src={gif} alt="gif" />
        </FlexGrid>
        <Grid item xs={12}>
          <Hello>Hello</Hello>
        </Grid>
        {isMobile && (
          <Grid item xs={6}>
            <Box p={6}>
              <Badges />
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box p={6}>
            <Text />
          </Box>
        </Grid>
      </PageGrid>
    </Container>
  );
};

export { About };
