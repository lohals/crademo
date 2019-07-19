import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ShadowDomContainerExposingStyleInsertionPointAndSpaRoot } from "./ShadowDemo";

// tried to register element together with the class component, but didn't work
// have to do it here before initialising. Don't know why
customElements.define(
  "shadow-spa-container",
  ShadowDomContainerExposingStyleInsertionPointAndSpaRoot
);

const shadowSpaContainer: ShadowDomContainerExposingStyleInsertionPointAndSpaRoot = document.createElement(
  "shadow-spa-container"
) as ShadowDomContainerExposingStyleInsertionPointAndSpaRoot;

document.body.appendChild(shadowSpaContainer);

// render SPA inside shadowDom
ReactDOM.render(
  <App jssStylesInsertionPoint={shadowSpaContainer.JssStylesInsertionPoint} />,
  shadowSpaContainer.SpaRoot
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
