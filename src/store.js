import {configureStore} from '@reduxjs/toolkit'
import jsonPlaceHolderReducer from './features/jsonPlaceHolder/state/jsonPlaceHolderSlice';

export const store = configureStore({
    reducer: {
        jsonPlaceHolder: jsonPlaceHolderReducer,
    },
})
