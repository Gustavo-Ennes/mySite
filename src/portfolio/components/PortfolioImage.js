import { Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { ProjectCard, ProjectCardMedia } from "../style";
import { projectList } from "../projectList";

const PortfolioImages = ({ tabValue }) => (
  <Box component="span">
    {Object.values(projectList)
      .filter((_, index) => index === tabValue)
      .map(({ images, title }) => (
        <Grid container justifyContent="center" alignItems="center" key={title}>
          {images.map((image) => (
            <Grid
              item
              xs={6}
              md={4}
              lg={3}
              key={`${title}${images.indexOf(image)}`}
            >
              <ProjectCard>
                <Zoom>
                  <ProjectCardMedia image={image} title={"asd"} />
                </Zoom>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      ))}
  </Box>
);

PortfolioImages.propTypes = {
  tabValue: PropTypes.number.isRequired,
};

export { PortfolioImages };
