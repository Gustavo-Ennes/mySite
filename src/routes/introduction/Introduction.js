import { Grid } from "@mui/material";
import { TechBox, NameBox } from "./components";
import { PageGridWithoutMargin, ContainerMaxHeight } from "./style";

export const Introduction = () => (
  <ContainerMaxHeight maxWidth="xl" id="home">
    <PageGridWithoutMargin container>
      <Grid item xs={12} md={6} lg={8}>
        <TechBox />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NameBox />
      </Grid>
    </PageGridWithoutMargin>
  </ContainerMaxHeight>
);
