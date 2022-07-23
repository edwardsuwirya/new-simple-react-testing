import axios from "axios";
import {authorizationHeaderInterceptor} from "./interceptors/authorizationHeaderInterceptor";

export const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2500,
});

clientInstance.interceptors.request.use(authorizationHeaderInterceptor, null);

export const jsonPlaceHolderClientInstance = axios.create({
    baseURL: process.env.REACT_APP_JSONPLACEHOLDER_URL
});
