import { Chip, Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const Badges = () => {
  const badges = [
    "javascript",
    "React",
    "node.js",
    "python",
    "Django",
    "reportlab",
    "beautiful_soup",
    "HTML",
    "Css",
    "GCP",
    "functional programming",
    "FHIR",
    "postgres",
    "mongoDB",
    "Mui",
    "bootstrap",
    "Vue",
    "Cypress",
    "integration tests",
    "unitary tests",
    "e2e tests",
  ];
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="between">
      {badges.map((badge) => (
        <Grid item xs>
          <Chip
            label={badge}
            deleteIcon={<DoneIcon />}
            onDelete={() => undefined}
            color="warning"
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};
