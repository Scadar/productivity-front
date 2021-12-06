import React, { FC } from "react";
import { Box, IconButton, Link, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { flexStyles } from "../../utils/styleUtils";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/slices/auth";

type NavbarProps = {
    setLeftMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: FC<NavbarProps> = ({ setLeftMenuOpen }) => {

    const dispatch = useAppDispatch();

    const toggleLeftMenu = () => {
        setLeftMenuOpen(prevState => !prevState);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const onProfileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const closeProfileMenu = () => {
        setAnchorEl(null);
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
                        sx={ { color: theme => theme.palette.common.white } }
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton
                        color="inherit"
                        size="small"
                        id="profile-menu"
                        aria-controls="profile-menu"
                        aria-haspopup="true"
                        aria-expanded={ open ? "true" : undefined }
                        onClick={ onProfileMenu }
                        sx={ { color: theme => theme.palette.common.white } }
                    >
                        <PersonOutlineOutlinedIcon/>
                    </IconButton>
                    <Menu
                        id="profile-menu"
                        anchorEl={ anchorEl }
                        open={ open }
                        onClose={ closeProfileMenu }
                    >
                        <MenuItem>
                            <Link
                                href="/profile"
                                underline="none"
                                color="inherit"
                            >
                                Профиль
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={ () => dispatch(logout()) }>Выход</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;