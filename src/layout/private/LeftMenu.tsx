import React, { FC } from "react";
import { Box, Link } from "@mui/material";

const LeftMenu: FC = () => {
    return (
        <Box>
            <Link href="/">Main</Link>
            <br/>
            <Link href="/today">Today</Link>
        </Box>
    );
};

export default LeftMenu;