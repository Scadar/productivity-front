import React from "react";
import { Role } from "../models/role";

type RouteType = {
    path: string
    Component: React.ComponentType
    //if NULL means available to everyone
    roles: Role[] | null
}

export const routes = [];