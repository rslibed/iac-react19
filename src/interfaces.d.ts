export interface AppData {
  titleText: string;
  textColor: string;
  backgroundColor: string;
  logoImage: string;
  logoImageAltText: string;
  logoLink: string;
  webmap: string;
}

export interface AppProps {
  data: AppData;
}

export interface HeaderProps {
  titleText: string;
  textColor: string;
  backgroundColor: string;
  logoImage: string;
  logoImageAltText: string;
  logoLink: string;
  view: __esri.MapView | null;
}
