import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/UserSlice";

export let store = configureStore({
  reducer: {
    user: userReducer,
  },
});
