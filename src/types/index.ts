export enum ColorPurpose {
  Main = "main",
  OnMain = "onMain",
  Container = "container",
  OnContainer = "onContainer",
  Transparent = "transparent",
}

export interface Variants {
  appearances?: Appearance[];
  themes?: string[];
  sizes?: string[];
}

export interface Appearance {
  name: string;
  color: ColorPurpose;
  "border-color": ColorPurpose;
  "background-color": ColorPurpose;
}

export interface IProperties {
  [key: string]: Property;
}
export interface Property {
  type: string;
  required?: boolean;
  default?: boolean | string | object | null;
}

export interface DesignSystemComponent {
  variants?: Variants;
  properties?: IProperties;
}
export interface IDesignSystemComponents {
  [key: string]: DesignSystemComponent;
}

export interface Meta {
  prefix: string;
}

export interface DesignSystem {
  meta: Meta;
  components: IDesignSystemComponents;
}
