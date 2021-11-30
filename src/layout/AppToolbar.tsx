import React, { FC } from "react";
import { Box } from "@mui/material";

const AppToolbar: FC = ({ children }) => {
    return (
        <Box
            sx={ {
                height: "44px",
                display: "flex",
                alignItems: "center",
                mx: 3,
                overflow: "hidden"
            } }
        >
            <Box>
                { children }
            </Box>
        </Box>
    );
};

export default AppToolbar;