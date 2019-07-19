import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/button";
import { create, Jss } from "jss";
import { jssPreset, StylesProvider } from "@material-ui/styles";

type AppProps = {
  jssStylesInsertionPoint: HTMLElement;
};

const App: React.FC<AppProps> = ({ jssStylesInsertionPoint }) => {
  return (
    <div>
      <StylesProvider
        jss={create({
          ...jssPreset(),
          // define a custom insertion point that JSS will look for when injecting the styles into the DOM.
          insertionPoint: jssStylesInsertionPoint
        })}
      >
        <div className="App">
          <Button variant="contained" color="primary">
            Hello with jss style
          </Button>
        </div>
      </StylesProvider>
    </div>
  );
};

export default App;
