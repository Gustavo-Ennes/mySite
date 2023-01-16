import { Container, Grid } from "@mui/material";
import { TechBox, NameBox } from "./components";
import { PageGridWithoutMargin } from "./style";

export const Introduction = () => (
  <Container maxWidth="xl" sx={{ maxHeight: "100vh" }}>
    <PageGridWithoutMargin container sx={{ margin: 0 }}>
      <Grid item xs={12} md={6} lg={8}>
        <TechBox />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NameBox />
      </Grid>
    </PageGridWithoutMargin>
  </Container>
);
