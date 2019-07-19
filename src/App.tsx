import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/button";
import { create, Jss } from "jss";
import { jssPreset, StylesProvider } from "@material-ui/styles";

type AppProps = {
  jssStylesInsertionPoint?: HTMLElement;
  id: number;
};

const App: React.FC<AppProps> = ({ jssStylesInsertionPoint, id }) => {
  return (
    <div>
      <StylesProvider
        jss={
          jssStylesInsertionPoint
            ? create({
                ...jssPreset(),
                // define a custom insertion point that JSS will look for when injecting the styles into the DOM.
                insertionPoint: jssStylesInsertionPoint
              })
            : create(jssPreset())
        }
        sheetsManager={new Map()}
      >
        <div className="App">
          <Button variant="contained" color="primary">
            Hello with jss style {id}
          </Button>
        </div>
      </StylesProvider>
    </div>
  );
};

export default App;
