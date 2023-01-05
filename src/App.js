import { Box, styled } from "@mui/material";
import "animate.css";

import "./App.scss";
import { TransitionProvider } from "./context/TransitionProvider";
import { ResponsiveAppBar } from './components/AppBar'

const FullHeightBox = styled(Box)(() => ({
    height: "100vh",
    backgroundColor: "#333"
}))

const App = () => {
  const items = ["home", "about", "resume", "portfolio", "services", "contact"];

  return (
    <TransitionProvider>
        <FullHeightBox>
            <ResponsiveAppBar />
        </FullHeightBox>
    </TransitionProvider>
  );
};

export default App;
