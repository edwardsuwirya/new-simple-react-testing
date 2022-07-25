import {configureStore} from '@reduxjs/toolkit'
import jsonPlaceHolderReducer from './features/jsonPlaceHolder/state/jsonPlaceHolderSlice';

// const rootReducer = combineReducers({
//     jsonPlaceHolder: jsonPlaceHolderReducer,
// })
// export const store = configureStore({
//     reducer: rootReducer,
// })

export const store = configureStore({
    reducer: {
        jsonPlaceHolder: jsonPlaceHolderReducer,
    },
})
