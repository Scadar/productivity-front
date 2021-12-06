import React, { FC } from "react";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const PublicLayout: FC = () => {
    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                            Productivity
                        </Typography>
                        <Button color="inherit" href="/login">Вход</Button>
                        <Button color="inherit" href="/register">Регистрация</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar/>
            <Container maxWidth="xl">
                <Outlet/>
            </Container>
        </Box>
    );
};

export default PublicLayout;