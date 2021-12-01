import React, { FC, useState } from "react";
import { alpha, Box, Container, useTheme } from "@mui/material";
import LeftMenu from "./LeftMenu";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Navbar from "./Navbar";

const PrivateLayout: FC = ({ children }) => {
    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const [leftMenuOpen, setLeftMenuOpen] = useState(dimensions.width > theme.breakpoints.values.md);

    const closeLeftMenu = () => {
        setLeftMenuOpen(false);
    };

    return (
        <Box sx={ { overflow: "hidden" } }>
            <Box
                sx={ theme => ({
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    backgroundColor: theme.palette.common.white
                }) }
            >
                <Navbar setLeftMenuOpen={ setLeftMenuOpen }/>
                <Box
                    sx={ {
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                    } }
                >
                    <Box
                        sx={ theme => ({
                            [theme.breakpoints.down("md")]: {
                                position: "fixed",
                                width: "100%",
                                height: "100%",
                                zIndex: theme.appZIndex.leftMenu - 1,
                                backgroundColor: alpha(theme.palette.common.black, 0.5),
                                transition: `opacity .25s ${ theme.transitions.easing.easeInOut }`,
                                opacity: leftMenuOpen ? 1 : 0,
                                visibility: leftMenuOpen ? "visible" : "hidden"
                            }
                        }) }
                        onClick={ closeLeftMenu }
                    />
                    <Box
                        sx={ {
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "column",
                            overflow: "hidden"
                        } }
                    >
                        <Box
                            sx={ theme => ({
                                width: "305px",
                                height: "calc(100vh - 44px)",
                                left: leftMenuOpen ? 0 : "-425px",
                                transition: `left 0.25s ${ theme.transitions.easing.easeInOut }`,
                                overflowX: "hidden",
                                overflowY: "hidden",
                                backgroundColor: "#fafafa",
                                position: "fixed",
                                zIndex: theme.appZIndex.leftMenu
                            }) }
                        >
                            <LeftMenu/>
                        </Box>
                        <Box
                            component="main"
                            sx={ theme => ({
                                marginLeft: leftMenuOpen ? "305px" : "0px",
                                transition: `margin-left 0.25s ${ theme.transitions.easing.easeInOut }`,
                                overflowX: "hidden",
                                overflowY: "auto",
                                position: "relative",
                                [theme.breakpoints.down("md")]: {
                                    marginLeft: 0
                                }
                            }) }
                        >
                            <Container maxWidth="xl" sx={ { overflowX: "auto" } }>
                                { children }
                            </Container>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PrivateLayout;