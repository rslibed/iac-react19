import { useState } from "react";
import { whenOnce } from "@arcgis/core/core/reactiveUtils";
import { Header } from "./Components/Header";
import { AppProps } from "./interfaces";
import { ArcgisMapCustomEvent } from "@arcgis/map-components";

function App({
  data: {
    titleText,
    textColor,
    backgroundColor,
    logoImage,
    logoImageAltText,
    logoLink,
    webmap,
  },
}: AppProps) {
  const [view, setView] = useState<__esri.MapView | null>(null);

  const arcgisViewReadyChangeCallback = async (
    e: ArcgisMapCustomEvent<void>
  ) => {
    const { view } = e.target;
    await whenOnce(() => !view?.updating);
    setView(view);
  };

  return (
    <calcite-shell>
      <Header
        titleText={titleText}
        textColor={textColor}
        backgroundColor={backgroundColor}
        logoImage={logoImage}
        logoImageAltText={logoImageAltText}
        logoLink={logoLink}
        view={view}
      />
      <calcite-shell-panel slot="panel-start">
        <calcite-panel loading={!view}>
          {view && (
            <instant-apps-interactive-legend view={view} featureCount={true} />
          )}
        </calcite-panel>
      </calcite-shell-panel>
      <arcgis-map
        itemId={webmap}
        onarcgisViewReadyChange={arcgisViewReadyChangeCallback}
      >
        <arcgis-home />
        <arcgis-zoom />
      </arcgis-map>
    </calcite-shell>
  );
}

export default App;
