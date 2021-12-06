import React, { FC } from "react";
import { useAppSelector } from "./hooks/redux";
import { Box } from "@mui/material";
import PrivateRouting from "./routes/PrivateRouting";
import PublicRouting from "./routes/PublicRouting";
import { authApi } from "./services/authService";

const App: FC = () => {
    const { user, globalLoading } = useAppSelector(state => state.auth);
    authApi.useFetchProfileQuery();

    const RouteComponent = user ? PrivateRouting : PublicRouting;

    if (globalLoading) {
        return <Box>Loading...</Box>;
    }
    return (
        <RouteComponent/>
    );
};

export default App;
