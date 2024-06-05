import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define interfaces for user data and state
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UserState {
users: User[];
  singleUser: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

// Define initial state
const initialState: UserState = {
  users: [],
  singleUser: null,
  status: "idle",
};

// Create async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

// Create async thunk for fetching a single user by id
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (userId: number) => {
    const response = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.data;
  }
);

// Create user slice with reducers
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserById.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.singleUser = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchUserById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
