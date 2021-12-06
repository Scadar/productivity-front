import React, { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import ProductivityHome from "../pages/productivityHome/ProductivityHome";
import PrivateLayout from "../layout/private/PrivateLayout";
import Profile from "../pages/settings/Profile";
import Advanced from "../pages/settings/Advanced";
import Today from "../pages/today/Today";

const PrivateRouting: FC = () => {
    let location = useLocation();

    let state = location.state as { backgroundLocation?: Location };
    const isModal = location.pathname.includes("settings");
    return (
        <>
            {
                isModal &&
                <Routes>
                    <Route path="settings">
                        <Route path="profile" element={ <Profile/> }/>
                        <Route path="advanced" element={ <Advanced/> }/>
                    </Route>
                </Routes>
            }

            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={ <PrivateLayout/> }>
                    <Route index element={ <ProductivityHome/> }/>
                    <Route path="today" element={ <Today/> }/>
                    <Route path="login" element={ <Navigate to="/"/> }/>
                    <Route path="register" element={ <Navigate to="/"/> }/>
                    <Route path="*" element={ <NotFoundPage/> }/>
                </Route>
            </Routes>

        </>
    );
};

export default PrivateRouting;