import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "./slices/userSlice"
import albumsReducer from "./slices/albumSlice"
import photosReducer from "./slices/photoSlice"

export const store = configureStore({
    reducer:{
      users: usersReducer,
      albums: albumsReducer,
      photos: photosReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch