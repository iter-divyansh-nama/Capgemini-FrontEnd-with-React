import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let fetchUser = createAsyncThunk(
  "user-slice/fetchuser",
  async (data, thunkAPI) => {
    try {
      let res = await fetch("https://api.github.com/users");
      let resData = await res.json();
      return resData;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export let getOneUser = createAsyncThunk(
  "user-slice/getOneUser",
  async (username, thunkAPI) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("Failed to fetch user");
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

let userSlice = createSlice({
  name: "user-slice",
  initialState: {
    users: [],
    loading: false,
    count: 0,
    error: null,
    oneUser: null,
  },
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.oneUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(getOneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { increaseCount, decrementCount } = userSlice.actions;
export default userSlice.reducer;
