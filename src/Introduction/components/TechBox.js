import { Box } from "@mui/material";

import {
  apiIconClasses,
  TechTypography,
  WhiteI,
  nodeIconClasses,
  reactIconClasses,
} from "../style";

const TechBox = () => (
  <Box p={2}>
    <TechTypography variant="h1">
      node.js <WhiteI className={nodeIconClasses}></WhiteI>
    </TechTypography>
    <TechTypography variant="h1">
      react <WhiteI className={reactIconClasses}></WhiteI>
    </TechTypography>
    <TechTypography variant="h1">
      api <WhiteI className={apiIconClasses}></WhiteI>
    </TechTypography>
  </Box>
);

export { TechBox };
