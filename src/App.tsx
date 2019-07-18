import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/button";
import { create, Jss } from "jss";
import { jssPreset, StylesProvider } from "@material-ui/styles";

const jss: Jss = create({
  ...jssPreset(),
  // define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: "jss-insertion-point"
});

const App: React.FC = () => {
  return (
    <StylesProvider jss={jss}>
      <div className="App">
        <Button>Hello</Button>
      </div>
    </StylesProvider>
  );
};

export default App;
