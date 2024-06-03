// src/redux/slices/photoSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotoState {
  photos: Photo[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: PhotoState = {
  photos: [],
  status: "idle",
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await axios.get<Photo[]>(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return response.data;
});

export const updatePhotoTitle = createAsyncThunk(
  "photos/updatePhotoTitle",
  async ({ id, title }: { id: number; title: string }) => {
    const response = await axios.patch<Photo>(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
      { title }
    );
    return response.data;
  }
);

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchPhotos.fulfilled,
        (state, action: PayloadAction<Photo[]>) => {
          state.photos = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchPhotos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(
        updatePhotoTitle.fulfilled,
        (state, action: PayloadAction<Photo>) => {
          const index = state.photos.findIndex(
            (photo) => photo.id === action.payload.id
          );
          if (index !== -1) {
            state.photos[index] = action.payload;
          }
        }
      );
  },
});

export default photoSlice.reducer;
