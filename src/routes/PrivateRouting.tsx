import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import ProductivityHome from "../pages/productivityHome/ProductivityHome";
import PrivateLayout from "../layout/private/PrivateLayout";
import Profile from "../pages/profile/Profile";

const PrivateRouting: FC = () => {
    return (
        <Routes>
            <Route path="/" element={ <PrivateLayout/> }>
                <Route index element={ <ProductivityHome/> }/>
                <Route path="/profile" element={ <Profile/> }/>
                <Route path="/login" element={ <Navigate to="/"/> }/>
                <Route path="/register" element={ <Navigate to="/"/> }/>
                <Route path="*" element={ <NotFoundPage/> }/>
            </Route>
        </Routes>
    );
};

export default PrivateRouting;