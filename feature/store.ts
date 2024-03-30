import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import pingResultsReducer from "./slices/pingResults"

export const store = configureStore({
    reducer: {
        pingResults: pingResultsReducer,
    }
  })


export const persistor = persistStore(store)