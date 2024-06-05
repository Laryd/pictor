import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumState {
  albums: Album[];
  singleAlbum: Album | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: AlbumState = {
  albums: [],
  singleAlbum: null,
  status: "idle",
};

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
  const response = await axios.get<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return response.data;
});

export const fetchAlbumById = createAsyncThunk(
  "albums/fetchAlbumById",
  async (albumId: number) => {
    const response = await axios.get<Album>(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`
    );
    return response.data;
  }
);

const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAlbums.fulfilled,
        (state, action: PayloadAction<Album[]>) => {
          state.albums = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchAlbums.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchAlbumById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAlbumById.fulfilled,
        (state, action: PayloadAction<Album>) => {
          state.singleAlbum = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchAlbumById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default albumSlice.reducer;
