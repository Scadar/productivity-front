import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <BrowserRouter>
                <CssBaseline/>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
