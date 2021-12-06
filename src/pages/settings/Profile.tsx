import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Dialog, DialogTitle } from "@mui/material";
import { useNavigate, useNavigationType } from "react-router-dom";

const Profile: FC = () => {
    const { user } = useAppSelector(state => state.auth);

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const navigateType = useNavigationType();
    const handleClose = () => {
        setOpen(false);
        if (navigateType === "POP") {
            navigate("/");
        } else {
            navigate(-1);
        }
    };

    return (
        <Dialog onClose={ handleClose } open={ open }>
            <DialogTitle>Профиль</DialogTitle>
            email: { user?.email }
            <br/>
            roles: { user?.roles.map(role => role) }
        </Dialog>
    );
};

export default Profile;