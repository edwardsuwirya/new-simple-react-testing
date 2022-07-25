import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from "./navigation/AppRouter";
import {DepsProvider} from "./shared/depContext";
import {Provider} from "react-redux";
import {store} from "./store";
import loginService from "./services/loginService/loginService";
import jsonPlaceHolderService from "./services/jsonPlaceHolderService/jsonPlaceHolderService";
import ApiClientFactory from "./shared/apiClient/apiClientFactory";
import {clientInstance, jsonPlaceHolderClientInstance} from "./shared/apiClient/apiClientInstanceFactory";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./shared/hook/useAuth";

//create .env file in the root of the project
//set environment variables starting with REACT_APP_
//access it by process.env.REACT_APP_... in components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <DepsProvider
                apiClient={{
                    localClient: ApiClientFactory(clientInstance),
                    jsonPlaceHolderClient: ApiClientFactory(jsonPlaceHolderClientInstance)
                }}
                services={{
                    loginService, jsonPlaceHolderService
                }}
            >
                <BrowserRouter>
                    <AuthProvider>
                        <AppRouter/>
                    </AuthProvider>
                </BrowserRouter>
            </DepsProvider>
        </Provider>
    </React.StrictMode>
);
