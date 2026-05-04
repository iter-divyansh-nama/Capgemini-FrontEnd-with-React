import  userReducer  from "./feature/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export let store=configureStore({reducer:{user:userReducer}})