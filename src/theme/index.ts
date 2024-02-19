import {
  Colors,
  FontFamily,
  Spacing,
  Fonts,
  BorderRadius,
  Shadows,
  Weights,
  Theme,
} from "./indexType";

const colors: Colors = {
  dark: "#1a1a1a",
  white: "#ffffff",
  background_white: "#f7f7f7",
  primary: "#f37120",
  secondary: "#003e70",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#8b8b8b",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
};

const fontFamily: FontFamily = {
  normal: "Open Sans, sans-serif",
  title: "Anton, sans-serif",
};

const spacing: Spacing = {
  xxxs: "2px",
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts: Fonts = {
  xxs: "8px",
  xs: "10px",
  S: "13px",
  P0: "14px",
  P1: "18px",
  P2: "20px",
  P3: "22px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};

const borderRadius: BorderRadius = {
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};

const shadows: Shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  orangeHighLight: "0 0 8px 0 rgb(255 154 35 / 100%)",
};

const weights: Weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

export const theme: Theme = {
  colors,
  fonts,
  borderRadius,
  shadows,
  weights,
  spacing,
  fontFamily,
};