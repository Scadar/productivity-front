import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { DeviceInfo, ILoginResponse, IUser } from "../models/userModel";
import { logout, setAuthUser, setGlobalLoading } from "../store/slices/auth";
import {
    getTokenFromLocalStorage,
    removeTokenFromLocalStorage,
    setTokenToLocalStorage,
    TokenType
} from "../utils/localStorage";
import { baseQuery } from "./config/query";
import { ApiResponse } from "../models/response";

export const authApi = createApi({
    reducerPath: "authAPI",
    baseQuery: baseQuery,
    endpoints: (build) => ({
        fetchLogin: build.mutation<ILoginResponse, { email: string, password: string, deviceInfo: DeviceInfo }>({
            query: ({ email, password, deviceInfo }) => ({
                url: "/auth/login",
                method: "POST",
                body: { email, password, deviceInfo }
            }),
            async onQueryStarted(arg, api) {
                try {
                    const { data } = await api.queryFulfilled;
                    setTokenToLocalStorage(TokenType.ACCESS, data.accessToken);
                    setTokenToLocalStorage(TokenType.REFRESH, data.refreshToken);
                } catch (e) {
                    removeTokenFromLocalStorage(TokenType.ACCESS);
                    removeTokenFromLocalStorage(TokenType.REFRESH);
                    api.dispatch(setAuthUser(null));
                }
            }
        }),
        fetchProfile: build.query<IUser, void>({
            query: () => ({
                url: "/user/me",
                method: "GET"
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const accessToken = getTokenFromLocalStorage(TokenType.ACCESS);
                if (!accessToken) {
                    dispatch(setGlobalLoading(false));
                    return;
                }

                dispatch(setGlobalLoading(true));
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setAuthUser(data));
                } catch (e) {
                    dispatch(logout());
                } finally {
                    dispatch(setGlobalLoading(false));
                }
            },
            transformResponse(result: any): IUser{
                const transformResult = result
                //@ts-ignore
                transformResult.roles = result.roles.map(role => role.role);
                return transformResult as IUser;
            }
        }),
        fetchRegister: build.mutation<ApiResponse, { email: string, password: string }>({
            query: ({ email, password }) => ({
                url: "/auth/register",
                method: "POST",
                body: { email, password }
            })
        })
    })
});