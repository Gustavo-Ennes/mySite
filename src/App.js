import { Grid } from "@mui/material";
import "animate.css";
import { useState } from "react";

import "./App.scss";
import { Header } from "./components/header/Header";
import { MainFrame } from "./components/mainFrame/MainFrame";

// TODO remover backgroundColor
const App = () => {
  const [component, setComponent] = useState("div1");
  const items = ["1", "2", "3", "4", "5", "6"];
  return (
    <Grid container>
      <Header items={items} setComponent={setComponent}/>
      <MainFrame component={component} />
    </Grid>
  );
};

export default App;
