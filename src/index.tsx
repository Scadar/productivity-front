import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, CssBaseline, LinkProps, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import { LinkBehavior } from "./components/LinkBehavior";
import { ToastProvider } from "react-toast-notifications";

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
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior
            } as LinkProps
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior
            }
        }
    }
});

ReactDOM.render(
    <Provider store={ store }>
        <ToastProvider autoDismiss placement={ "bottom-center" }>
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <CssBaseline/>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </ToastProvider>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
