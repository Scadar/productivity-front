import React, { FC } from "react";
import AppToolbar from "./AppToolbar";
import { AppBar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: FC<NavbarProps> = ({ setOpen }) => {
    return (
        <Box sx={{overflow: "hidden", background: "red"}}>
            <AppToolbar >
                <IconButton
                    color="inherit"
                    size="small"
                    edge="start"
                    sx={ {
                        marginRight: "36px"
                    } }
                    onClick={ () => setOpen(prevState => !prevState) }
                >
                    <MenuIcon/>
                </IconButton>
            </AppToolbar>
        </Box>
    );
};

export default Navbar;