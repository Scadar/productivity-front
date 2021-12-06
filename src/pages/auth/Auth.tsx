import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Divider, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { flexStyles } from "../../utils/styleUtils";
import { authApi } from "../../services/authService";
import { Device } from "../../models/userModel";
import { useToasts } from "react-toast-notifications";
import { ApiError } from "../../models/response";

const Auth: FC = () => {
    const { pathname } = useLocation();
    const isRegister = pathname === "/register";
    const { addToast } = useToasts();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fetchLogin, {
        isLoading: loginLoading,
        error: loginError
    }] = authApi.useFetchLoginMutation();
    const [fetchRegister, {
        isLoading: registerLoading,
        error: registerError
    }] = authApi.useFetchRegisterMutation();
    const [fetchProfile, {
        isFetching: isProfileFetching,
        error: profileError
    }] = authApi.useLazyFetchProfileQuery();

    useEffect(() => {
        let error;
        if (profileError) {
            error = profileError as ApiError;
        }
        if (loginError) {
            error = loginError as ApiError;
        }
        if (registerError) {
            error = registerError as ApiError;
        }
        if (error) {
            addToast(error.data.data, { appearance: "error" });
        }
    }, [registerError, profileError, loginError, addToast]);

    const loginRequest = (email: string, password: string) => {
        fetchLogin({
            email,
            password,
            deviceInfo: {
                deviceId: "1",
                deviceType: Device.DEVICE_TYPE_DESKTOP,
                notificationToken: "N1"
            }
        })
        .unwrap()
        .then(() => {
            fetchProfile();
        });
    };

    const registerRequest = (email: string, password: string) => {
        fetchRegister({ email, password })
        .unwrap()
        .then(() => {
            loginRequest(email, password);
        });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isRegister) {
            registerRequest(email, password);
        } else {
            loginRequest(email, password);
        }
    };

    return (
        <Box sx={ { ...flexStyles("center", "center") } }>
            <Paper
                sx={ {
                    width: "400px",
                    p: 3,
                    mt: 8
                } }
            >
                <Typography
                    variant={ "h5" }
                    sx={ {
                        fontWeight: 500,
                        mb: 2
                    } }
                >
                    { isRegister ? "Регистрация" : "Вход" }
                </Typography>
                <Stack
                    direction="column"
                    spacing={ 2 }
                    component="form"
                    onSubmit={ onSubmit }
                    noValidate
                >
                    <TextField
                        fullWidth
                        required
                        label="Почта"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                    <TextField
                        fullWidth
                        required
                        label="Пароль"
                        value={ password }
                        onChange={ e => setPassword(e.target.value) }
                        type="password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={ loginLoading || registerLoading || isProfileFetching }
                    >
                        { isRegister ? "Регистрация" : "Войти" }
                    </Button>
                    <Link
                        href="/forgot-password"
                        underline="none"
                        variant="caption"
                        sx={ { color: theme => theme.palette.text.secondary } }
                    >
                        Забыли пароль?
                    </Link>
                    <Divider/>
                    <Typography
                        variant="caption"
                        sx={ { ...flexStyles("center", "center") } }
                    >
                        {
                            isRegister ?
                                <>Есть аккаунт? &nbsp;<Link href="/login" underline="none">Вход</Link></>
                                :
                                <>Нет аккаунта? &nbsp;<Link href="/register" underline="none">Регистрация</Link></>
                        }
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    );
};

export default Auth;