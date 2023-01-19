import { useContext } from "react";

import { Box, CircularProgress, styled } from "@mui/material";

import { LoadingContext } from "./context";
import { YELLOW } from "../../utils/colors";

const FullStaticPage = styled(Box)(() => ({
  top: 0,
  left: 0,
  position: "fixed",
  zIndex: 6,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CustomCircularProgress = styled(CircularProgress)(() => ({
  color: YELLOW,
}));

const LoadingPage = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div>
      {isLoading && (
        <FullStaticPage>
          <CustomCircularProgress />
        </FullStaticPage>
      )}
    </div>
  );
};

export { LoadingPage };
