import { Box, Grid, TextField, styled, Button } from "@mui/material";

import { YELLOW } from "../../utils/colors";

const StyledTextArea = styled(TextField)(() => ({
  width: "100%",
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: YELLOW,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    borderColor: YELLOW,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: YELLOW,
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiInputLabel-outlined": {
    color: "white",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "teal",
  },
}));

const StyledParagraph = styled("p")(() => ({
  textAlign: "center",
  color: YELLOW,
  fontFamily: "'Space Mono', monospace",
  padding: "15px",
  backgroundColor: "teal",
  marginBottom: "75px"
}));

const PaddingBox = styled(Box)(() => ({
  padding: "15px",
}));

const ButtonBox = styled(PaddingBox)(() => ({
  width: "100%",
}));

const PaddingGrid = styled(Grid)(() => ({
  padding: "30px",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: YELLOW,
  marginTop: "20px",
  color: "teal",
  textAlign: "right",
  float: "right",
}));

export {
  StyledTextArea,
  StyledParagraph,
  PaddingBox,
  PaddingGrid,
  ButtonBox,
  StyledButton,
};
