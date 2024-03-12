import { AppDispatch } from "../app/store"
import { errorQuote, pendingQuote, putQuote } from "../features/slices/quoteSlice"


export const fetchQuote = () => {
    return (dispatch: AppDispatch) => {
        dispatch(pendingQuote())
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => data.sentence)
            .then(quote => dispatch(putQuote(quote as string)))
            .catch(() => dispatch(errorQuote()))
    }
}