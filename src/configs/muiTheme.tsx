import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: { main: "#3DADE2" },
    secondary: { main: "#FFF" },
    text: {
      primary: "#fff",
      secondary: "#666",
      disabled: "#999",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: { fontSize: "75px", fontWeight: "550" },
        h2: { fontSize: "40px", fontWeight: "550" },
        h3: { fontSize: "20px" },
        body1: { fontSize: "18px" },
        caption: { fontSize: "11px" },
        root: { fontFamily: "roboto" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { fontWeight: "600", borderRadius: "18px" },
        contained: { color: "#fff" },
      },
    },
  },
});

export default muiTheme;
