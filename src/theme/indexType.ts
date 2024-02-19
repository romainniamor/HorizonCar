//TYPES

type Colors = {
  dark: string;
  white: string;
  background_white: string;
  background_dark: string;
  primary: string;
  secondary: string;
  success: string;
  red: string;
  redSecondary: string;
  blue: string;
  greyLight: string;
  greyMedium: string;
  greySemiDark: string;
  greyDark: string;
  greyBlue: string;
};

type FontFamily = {
  normal: string;
  title: string;
};

type Spacing = {
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

type Fonts = {
  xxs: string;
  xs: string;
  S: string;
  P0: string;
  P1: string;
  P2: string;
  P3: string;
  P4: string;
  P5: string;
  P6: string;
};

type BorderRadius = {
  round: string;
  extraRound: string;
  circle: string;
};

type Shadows = {
  subtle: string;
  medium: string;
  strong: string;
  orangeHighLight: string;
};

type Weights = {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  heavy: number;
};

export type Theme = {
  colors: Colors;
  fonts: Fonts;
  borderRadius: BorderRadius;
  shadows: Shadows;
  weights: Weights;
  spacing: Spacing;
  fontFamily: FontFamily;
};
