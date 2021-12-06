import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layout/public/PublicLayout";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFound/NotFoundPage";

const PublicRouting: FC = () => {
    return (
        <Routes>
            <Route path="/" element={ <PublicLayout/> }>
                <Route index element={ <Home/> }/>
                <Route path="login" element={ <Auth/> }/>
                <Route path="register" element={ <Auth/> }/>
                <Route path="*" element={ <NotFoundPage/> }/>
            </Route>
        </Routes>
    );
};

export default PublicRouting;