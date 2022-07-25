import {Provider} from "react-redux";
import {render} from "@testing-library/react";

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
export * from '@testing-library/react';
export {reduxProviderender as render};
