import { Box } from "@mui/material";

import { TextTypography } from "../style";

const Text = () => (
  <Box>
    <TextTypography>
      Hi, I'm Gustavo. I'm a full-stack developer based in Brazil, I love to
      learn new technologies and abstract myself with complex things.
    </TextTypography>{" "}
    <TextTypography>
      I have experience in node.js and react, a little bit of django and vue
      too. I've worked the last two years using this stack, developing
      maintainable code, consuming REST API and GraphQL, building new routes on
      the backend, implementing and customizing components on the frontend, in
      addition to dealing with functions; I'm familiar with the FHIR pattern,
      Mui, functional programming, Cypress and testing, task analysis and
      drill-down, code reviews, and internal documentation.
    </TextTypography>{" "}
    <TextTypography>
      It will be a pleasure to get in touch with you!
    </TextTypography>
  </Box>
);

export { Text };
