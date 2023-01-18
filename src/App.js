import "animate.css";

import "./App.scss";
import { AppBar, FullHeightBox } from "./components";
import {
  Introduction,
  Maintenance,
  About,
  Resume,
  Portfolio,
  Contact,
} from "./routes";

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
          <Introduction />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </>
      )}
    </FullHeightBox>
  );
};

export default App;
