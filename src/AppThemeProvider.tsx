import React, { FunctionComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core";

const theme = createMuiTheme({
  spacing: 6,
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    type: "light",
    primary: {
      light: "rgba(235, 235, 235, 1)",
      main: "rgba(54, 55, 64, 1)",
      contrastText: "#fff"
    },

    background: {
      default: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.8)",
      secondary: "rgba(159, 162, 180, 1)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(54, 55, 64, 0.71)"
    }
  },
});

export const AppThemeProvider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
