// @flow
export type State = {
  profileLoading: boolean, // think loading new country on map click
  shouldForceRedraw: boolean
};
export type Viewport = {
  zoom: number,
  center: number[],
  bounds: number[][],
  minZoom: number,
};
export type ViewportDefaults = {
  attributionControl: boolean,
  scrollZoom: boolean,
};
export type MapData = {|
  id: ?string,
  slug: ?string,
  name: ?string,
  color: ?string,
  year: ?number,
  uid: ?string,
  detail: ?string,
  value: ?number,
|};

export type PaintMap = {
  data?: MapData[],
  center?: number[],
  mapStyle?: string, // we have a default style
  baseColor?: string,
  propertyName?: string,
  propertyLayer?: string,
  paintProperty?: string,
  background?: string,
};
export type Meta = {
  uom_display: string,
  theme: string,
  country: string, // global or uganda for spotlight uganda
  id: string,
  // map indicator user friendly label / slug eg Poverty
  name: string
};

export type Props = {
  paint: PaintMap,
  viewport: Viewport,
  meta?: Meta,
  countryProfile?: string,
  width?: number | string,
  height?: number | string,
};

export type MapBoxOptions = {
  style: string,
  ...Viewport,
  ...ViewportDefaults,
  container: HTMLDivElement | string,
};
export type Geometry = {
  coordinates: number[][][],
};
export type Feature = {
  properties: {
    id?: string,
    ISO2?: string,
    value?: number,
    type?: string,
    ISO?: string,
    P20?: number,
    p20?: number,
    DHSREGEN?: string,
    CNTRYNAMEE?: string,
    'country-slug'?: string,
    'country-name'?: string,
    NAME?: string,
    name?: string,
    dhsreg?: string,
  },
  layer: {
    type: string
  },
  geometry: Geometry,
};
export type Point = {
  lng: number,
  lat: number,
};
export type PopupItem = {
  pointData: MapData,
  pos: Point,
};
export type GenericTipHtml = {
  id: string,
  country: string,
  name: string,
  uom: string,
  value: string | number,
};
