import { Container, Grid } from "@mui/material";

import { PageGrid, TitleTypography } from "../../components";
import { Experience } from "./components";
import { experiencesList } from "./experiencesList";

const Resume = () => {
  return (
    <Container maxWidth="xl" id="resume">
      <PageGrid container alignItems="stretch" justifyContent="center">
        <Grid item xs={12}>
          <TitleTypography>Resume</TitleTypography>
        </Grid>
        {experiencesList.map(({ date, company, position, items, href }) => (
          <Grid item xs={12} md={6} key={date}>
            <Experience
              date={date}
              company={company}
              position={position}
              href={href}
              items={items}
            ></Experience>
          </Grid>
        ))}
      </PageGrid>
    </Container>
  );
};

export { Resume };
