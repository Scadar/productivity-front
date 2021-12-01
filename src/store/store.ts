import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import { authApi } from "../services/authService";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    auth
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(authApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
