import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotoState {
  photos: Photo[];
  singlePhoto: Photo | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  singlePhotoStatus: "idle" | "loading" | "succeeded" | "failed";
  updateStatus: "idle" | "loading" | "succeeded" | "failed"; 
}

const initialState: PhotoState = {
  photos: [],
  singlePhoto: null,
  status: "idle",
  singlePhotoStatus: "idle",
  updateStatus: "idle", 
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await axios.get<Photo[]>(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return response.data;
});

export const fetchPhotoById = createAsyncThunk(
  "photos/fetchPhotoById",
  async (photoId: number) => {
    const response = await axios.get<Photo>(
      `https://jsonplaceholder.typicode.com/photos/${photoId}`
    );
    return response.data;
  }
);

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
      .addCase(fetchPhotoById.pending, (state) => {
        state.singlePhotoStatus = "loading";
      })
      .addCase(
        fetchPhotoById.fulfilled,
        (state, action: PayloadAction<Photo>) => {
          state.singlePhoto = action.payload;
          state.singlePhotoStatus = "succeeded";
        }
      )
      .addCase(fetchPhotoById.rejected, (state) => {
        state.singlePhotoStatus = "failed";
      })
      .addCase(updatePhotoTitle.pending, (state) => {
        state.updateStatus = "loading";
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
          // Also update the singlePhoto if it's the same photo being updated
          if (state.singlePhoto?.id === action.payload.id) {
            state.singlePhoto = action.payload;
          }
          state.updateStatus = "succeeded"; // Update this line
        }
      )
      .addCase(updatePhotoTitle.rejected, (state) => {
        state.updateStatus = "failed"; // Add this line
      });
  },
});

export default photoSlice.reducer;
