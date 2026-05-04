import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "userslice",
  initialState: { user: [] },
  reducers: {
    adduser: (state, action) => {
      console.log(state, action);
      state = { ...state, user: [...state.user, action.payload] };
      return state;
    },
  },
});

export let { adduser } = userSlice.actions;
export default userSlice.reducer;
