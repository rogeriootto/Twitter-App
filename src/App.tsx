import { Outlet } from "react-router-dom";
import "./App.css";
import { dark, light } from "./styles/themes/themes";
import { ThemeProvider } from "@emotion/react";
import muiTheme from "./configs/muiTheme";

const theme = dark;

function App() {
  return (
    <div style={{ backgroundColor: theme.primary, color: theme.textColor }}>
      <ThemeProvider theme={muiTheme}>
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
