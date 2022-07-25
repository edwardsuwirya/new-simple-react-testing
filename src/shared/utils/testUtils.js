import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import ApiClientFactory from "../apiClient/apiClientFactory";
import {jsonPlaceHolderClientInstance} from "../apiClient/apiClientInstanceFactory";
import jsonPlaceHolderService from "../../services/jsonPlaceHolderService/jsonPlaceHolderService";
import {DepsProvider} from "../depContext";

// export const renderWithProviders = (ui, {dummyStore = store} = {}) => {
//
//
//     return {...render(ui, {wrapper: ReduxProviderWrapper}), dummyStore}
// }

const reduxProviderender = (ui, store, options) => {
    const ReduxProviderWrapper = ({children}) => {
        return <Provider store={store}>{children}</Provider>
    }
    return (
        render(ui, {wrapper: ReduxProviderWrapper, ...options})
    )
}

export const memoryRouterRender = (ui, store, entry, options) => {
    const ReduxProviderWrapper = ({children}) => {
        return (
            <Provider store={store}>
                <DepsProvider
                    apiClient={{
                        jsonPlaceHolderClient: ApiClientFactory(jsonPlaceHolderClientInstance)
                    }}
                    services={{
                        jsonPlaceHolderService
                    }}
                >
                    <MemoryRouter initialEntries={[entry]}>
                        {children}
                    </MemoryRouter>

                </DepsProvider>
            </Provider>
        )
    }
    return (
        render(ui, {wrapper: ReduxProviderWrapper, ...options})
    )
}

export * from '@testing-library/react';
export {reduxProviderender as render};
