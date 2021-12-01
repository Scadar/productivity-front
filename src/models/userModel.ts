export interface IUser {
    id: number;
    createdAt: string;
    active: boolean;
    email: string;
    firstName?: string;
    lastName?: string;
    username: string;
    isEmailVerified: boolean;
    roles: string[];
}

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expiryDuration: number;
}

export enum Device {
    DEVICE_TYPE_ANDROID = "DEVICE_TYPE_ANDROID",
    DEVICE_TYPE_IOS = "DEVICE_TYPE_IOS",
    DEVICE_TYPE_DESKTOP = "DEVICE_TYPE_DESKTOP",
}

export interface DeviceInfo {
    deviceId: string;
    deviceType: Device;
    notificationToken: string;
}