import {APP_TOKEN} from "../../constants";

export const authorizationHeaderInterceptor = (config) => {
    const value = window.localStorage.getItem(APP_TOKEN);
    config.headers.Authorization = `Bearer ${value}`;
    return config;
}
