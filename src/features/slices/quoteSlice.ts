import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: 'Winter is coming',
    reducers: {
        pendingQuote: (state) => {
            return 'Pending...'
        },
        errorQuote: (state) => {
            return 'Error'
        },
        putQuote: (state, action) => {
            return action.payload
        }
    }
})

export const {pendingQuote, errorQuote, putQuote} = quoteSlice.actions
export default quoteSlice.reducer