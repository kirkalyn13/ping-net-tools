import { createSlice } from '@reduxjs/toolkit'
import storage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: "pingResults",
    storage
}

const initialFieldValues: PingResult[] = []

export const pingResultsSlice = createSlice({
    name: "pingResults",
    initialState: {
        data: initialFieldValues,
    },
    reducers:{
        addResult: (state, action) => {
            if (action.payload.length === 0) return
            const results: PingResult[] = [ ...state.data, action.payload ] 
            state.data = [ ...results.sort((a, b) => a.iteration - b.iteration) ]  
        },
        clearResults: (state) => {
            state.data = initialFieldValues
        }
    },
})

export const { addResult, clearResults } = pingResultsSlice.actions
export default pingResultsSlice.reducer
// export default persistReducer(persistConfig, pingResultsSlice.reducer)