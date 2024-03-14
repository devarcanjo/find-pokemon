import { PaletteColorOptions } from "@mui/material";
import { ThemeStatusColor } from "./interfaces";

declare module "@mui/material/styles" {
  interface Palette {
    limeGreenColor?: PaletteColorOptions;
    lightGrey?: string;
    mediumGrey?: string;
    greyAction: string;
    status: ThemeStatusColor;
    primaryLight: string;
  }

  interface PaletteOptions {
    primaryLight: string;
  }
}
