import "animate.css";

import "./App.scss";
import { AppBar, FullHeightBox } from "./components";
import { Introduction } from "./Introduction";
import { Maintenance } from "./maintenance";
import { About } from "./about";
import { Resume } from "./resume";
import { Portfolio } from "./portfolio/Portfolio";

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
        </>
      )}
    </FullHeightBox>
  );
};

export default App;
