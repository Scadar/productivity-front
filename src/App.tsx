import React, { FC } from "react";
import PrivateLayout from "./layout/PrivateLayout";
import { useAppSelector } from "./hooks/redux";
import { Box } from "@mui/material";
import PrivateRouting from "./routes/PrivateRouting";
import PublicRouting from "./routes/PublicRouting";
import PublicLayout from "./layout/PublicLayout";
import { authApi } from "./services/authService";

const App: FC = () => {

    const { user, globalLoading } = useAppSelector(state => state.auth);
    authApi.useFetchProfileQuery();

    const RouteComponent = user ? PrivateRouting : PublicRouting;
    const LayoutComponent = user ? PrivateLayout : PublicLayout;

    if (globalLoading) {
        return <Box>Loading...</Box>;
    }
    return (
        <LayoutComponent>
            <RouteComponent />
        </LayoutComponent>
    );
};

export default App;
