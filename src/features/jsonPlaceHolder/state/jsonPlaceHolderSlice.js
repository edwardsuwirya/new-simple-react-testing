import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    postings: [],
}

export const jsonPlaceHolderSlice = createSlice({
    name: 'jsonPlaceHolder',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.postings = [...state.postings, action.payload]
        },
    },
})

export const {
    addPost
} = jsonPlaceHolderSlice.actions

export default jsonPlaceHolderSlice.reducer;
