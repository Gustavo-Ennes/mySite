import { Box, Chip, Grid, styled } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { YELLOW } from "../../../utils/colors";
import { badgesList } from "./bagesList";

const StyledChip = styled(Chip)(() => ({
  width: "auto",
  height: "15px",
  color: YELLOW,
  backgroundColor: "teal",
  fontSize: "10px",
}));

const CentralizedBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Badges = () => (
  <Grid
    container
    spacing={1}
    justifyContent="center"
    alignItems="center"
  >
    {badgesList.map((badge) => (
      <Grid item xs>
        <CentralizedBox>
          <StyledChip
            label={badge}
            deleteIcon={<DoneIcon />}
            onDelete={() => undefined}
          />
        </CentralizedBox>
      </Grid>
    ))}
  </Grid>
);

export { Badges };
