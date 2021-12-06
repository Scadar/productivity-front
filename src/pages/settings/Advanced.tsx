import React, { FC } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { Dialog } from "@mui/material";

const Advanced: FC = () => {
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
            Advanced
        </Dialog>
    );
};

export default Advanced;