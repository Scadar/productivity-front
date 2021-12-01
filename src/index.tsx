import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";

require("dotenv")
.config();

declare module "@mui/material/styles" {
    interface Theme {
        appZIndex: {
            leftMenu: number;
        };
    }

    interface ThemeOptions {
        appZIndex?: {
            leftMenu?: number;
        };
    }
}

const theme = createTheme({
    appZIndex: {
        leftMenu: 199
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <CssBaseline/>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
