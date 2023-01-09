import { Grid } from "@mui/material";
import { PageGrid } from "../components";
import { TechBox, NameBox } from "./components";

export const Introduction = () => {
  return (
    <PageGrid container>
      <Grid item xs={12} md={6} lg={8}>
        <TechBox />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <NameBox />
      </Grid>
    </PageGrid>
  );
};
