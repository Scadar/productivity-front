import React, { FC } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { flexStyles } from "../utils/styleUtils";

type NavbarProps = {
    setLeftMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: FC<NavbarProps> = ({ setLeftMenuOpen }) => {

    const toggleLeftMenu = () => {
        setLeftMenuOpen(prevState => !prevState);
    };

    return (
        <Box
            sx={ {
                overflow: "hidden",
                background: "#db4c3f",
                height: "44px",
                flexShrink: 0,
                px: 3,
                ...flexStyles("center", "center")
            } }
            component="header"
        >
            <Box
                sx={ {
                    height: "100%",
                    width: "100%",
                    ...flexStyles("center", "space-between")
                } }
            >
                <Box>
                    <IconButton
                        color="inherit"
                        size="small"
                        edge="start"
                        onClick={ toggleLeftMenu }
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton
                        color="inherit"
                        size="small"
                    >
                        <PersonOutlineOutlinedIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;