import "animate.css";

import "./App.scss";
import { AppBar, FullHeightBox, ReturnToTopButton } from "./components";
import { LoadingPage } from "./context/loading/Loading";
import { Maintenance, DefaultRoutes } from "./routes";

const App = () => {
  const underMaintenanceMode =
    process.env.REACT_APP_MAINTENANCE_MODE === "true";

  return (
    <FullHeightBox>
      {underMaintenanceMode ? (
        <Maintenance />
      ) : (
        <>
          <AppBar />
          <DefaultRoutes />
          <ReturnToTopButton />
          <LoadingPage />
        </>
      )}
    </FullHeightBox>
  );
};

export default App;
