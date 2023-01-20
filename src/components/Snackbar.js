import { Alert, Snackbar as MuiSnackbar } from "@mui/material";

const ErrorSnackbar = ({ error, setError }) => (
  <MuiSnackbar
    open={!!error}
    autoHideDuration={6000}
    message={error}
    onClose={() => setError(false)}
    color="error"
  >
    <Alert severity="error" sx={{ width: "100%" }}>
      {error}
    </Alert>
  </MuiSnackbar>
);

export { ErrorSnackbar };
