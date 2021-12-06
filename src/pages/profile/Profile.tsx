import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

const Profile: FC = () => {
    const { user } = useAppSelector(state => state.auth);
    return (
        <div>
            email: { user?.email }
            <br/>
            roles: { user?.roles.map(role => role) }
        </div>
    );
};

export default Profile;