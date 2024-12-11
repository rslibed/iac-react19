import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { defineCustomElements as defineInstantAppsElements } from "@esri/instant-apps-components/loader";

import App from "./App.tsx";
import "./index.scss";

import "./utils/require";

import data from "./config/application.json";

document.title = data.titleText;

const { BASE_URL } = import.meta.env;
const path = `${BASE_URL}assets`;
const { href } = window.location;
const resourcesUrl = new URL(path, href).href;
const options = { resourcesUrl };
defineCalciteElements(window, options);
defineMapElements(window, options);
defineInstantAppsElements(window, options);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>
);
