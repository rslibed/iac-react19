import type { JSX as CalciteJSX } from "@esri/calcite-components";
import { JSX as ArcgisJSX } from "@arcgis/map-components";
import type { JSX as InstantAppsJSX } from "@esri/instant-apps-components";

interface LocalWebComponentJSXNode {
  children?: React.ReactNode;
  slot?: string;
}

// Calcite Components
interface LocalCalciteShell
  extends CalciteJSX.CalciteShell,
    LocalWebComponentJSXNode {}

interface LocalCalciteShellPanel
  extends CalciteJSX.CalciteShellPanel,
    LocalWebComponentJSXNode {}

interface LocalCalcitePanel
  extends CalciteJSX.CalcitePanel,
    LocalWebComponentJSXNode {}

// Map Components
interface LocalArcgisMap extends ArcgisJSX.ArcgisMap, LocalWebComponentJSXNode {
  // https://odoe.net/blog/react-19-beta-web-components
  onarcgisViewReadyChange: ArcgisJSX.ArcgisMap["onArcgisViewReadyChange"];
}

// Instant Apps Components
interface LocalInstantAppsHeader
  extends InstantAppsJSX.InstantAppsHeader,
    LocalWebComponentJSXNode {}

interface LocalInstantAppsSocialShare
  extends InstantAppsJSX.InstantAppsSocialShare,
    LocalWebComponentJSXNode {}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements extends CalciteJSX.IntrinsicElements {
      "calcite-shell": LocalCalciteShell;
      "calcite-shell-panel": LocalCalciteShellPanel;
      "calcite-panel": LocalCalcitePanel;
    }
    interface IntrinsicElements extends ArcgisJSX.IntrinsicElements {
      "arcgis-map": LocalArcgisMap;
    }
    interface IntrinsicElements extends InstantAppsJSX.IntrinsicElements {
      "instant-apps-header": LocalInstantAppsHeader;
      "instant-apps-social-share": LocalInstantAppsSocialShare;
    }
  }
}
