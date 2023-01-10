import { Box, styled } from "@mui/material";

import { DARK_GRAY } from "../utils/colors";

const FullHeightBox = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundColor: DARK_GRAY,
}));

export { FullHeightBox };
