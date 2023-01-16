import { useState } from "react";

import { Container, Grid, Tab } from "@mui/material";

import { projectList } from "./projectList";
import { PageGrid, TitleTypography } from "../../components";
import { PortfolioImages } from "./components";
import { StyledTabs } from "./style";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <PageGrid container alignContent="baseline" justifyItems="stretch">
        <Grid item xs={12}>
          <TitleTypography variant="h2">Portfolio</TitleTypography>
        </Grid>
        <Grid item xs={12}>
          <StyledTabs
            value={tabValue}
            onChange={handleChange}
            scrollButtons="auto"
            centered
          >
            {projectList.map(({ title }, index) => (
              <Tab
                key={index}
                label={title}
              />
            ))}
          </StyledTabs>
        </Grid>
        <Grid item xs={12}>
          <PortfolioImages tabValue={tabValue} />
        </Grid>
      </PageGrid>
    </Container>
  );
};

export { Portfolio };
