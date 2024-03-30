import { configureStore } from '@reduxjs/toolkit'
import pingResultsReducer from "./slices/pingResults"

export const store = configureStore({
    reducer: {
        pingResults: pingResultsReducer,
    }
  })