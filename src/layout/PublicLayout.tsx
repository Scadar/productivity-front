import React, { FC } from "react";

const PublicLayout: FC = ({ children }) => {
    return (
        <div>
            <header>Head</header>
            { children }
        </div>
    );
};

export default PublicLayout;