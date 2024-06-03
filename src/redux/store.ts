import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import albumReducer from "./slices/albumSlice"

export const store = configureStore({
    reducer:{
      users: userReducer,
      albums: albumReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch