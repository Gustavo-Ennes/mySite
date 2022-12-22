import { Grid } from "@mui/material";
import "animate.css";

import "./App.scss";
import { Header } from "./components/header/Header";
import { MainFrame } from "./components/mainFrame/MainFrame";
import { TransitionProvider } from "./context/TransitionProvider";

const App = () => {
  const items = ["home", "about", "resume", "portfolio", "services", "contact"];

  return (
    <TransitionProvider>
      <Grid container>
        <Header items={items} />
        <MainFrame />
      </Grid>
    </TransitionProvider>
  );
};

export default App;
