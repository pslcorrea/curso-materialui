import { createTheme } from "@mui/material";
import { lightBlue, indigo } from "@mui/material/colors";
export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: indigo[800],
      dark: indigo[900],
      light: indigo[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: lightBlue[500],
      dark: lightBlue[400],
      light: lightBlue[300],
      contrastText: "#ffffff",
    },
    background: {
      default: "#202124",
      paper: "#303134",
    },
  },
  typography: {
    allVariants: {
      color: "#ffffff",
    },
  },
});
