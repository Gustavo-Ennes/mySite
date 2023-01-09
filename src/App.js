import "animate.css";

import "./App.scss";
import { AppBar, FullHeightBox } from "./components";
import { Introduction } from "./Introduction";
import { Maintenance } from "./maintenance";

const App = () => {
  const underMaintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === 'true';
  console.log("🚀 ~ file: App.js:10 ~ App ~ process.env.REACT_APP_MAINTENANCE_MODE", process.env.REACT_APP_MAINTENANCE_MODE)
  console.log(
    "🚀 ~ file: App.js:10 ~ App ~ underMaintenanceMode",
    underMaintenanceMode
  );
  return (
    <FullHeightBox>
      {underMaintenanceMode ? (
        <Maintenance />
      ) : (
        <>
          <AppBar />
          <Introduction />
        </>
      )}
    </FullHeightBox>
  );
};

export default App;
