import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";
import albumsReducer from "./slices/albumSlice";
import photosReducer from "./slices/photoSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
