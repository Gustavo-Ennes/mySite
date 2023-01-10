import { Grid, styled } from "@mui/material";

import { DARK_GRAY } from "../utils/colors";

const PageGrid = styled(Grid)(() => ({
  minHeight: "91vh",
  backgroundColor: DARK_GRAY,
}));

export { PageGrid };
