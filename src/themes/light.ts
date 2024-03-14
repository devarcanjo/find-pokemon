import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
  palette: {
    primary: {
      main: "#F2B807",
    },
    secondary: {
      main: "#F28F16",
    },

    primaryLight: "#F5DB13",

    background: {
      default: "#F6F7F9",
      paper: "#212121",
    },
    text: {
      primary: "#333333",
    },

    status: {
      red: "#D93E30",
    },
  },
});
