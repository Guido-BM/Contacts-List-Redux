import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthReducers";

const store = configureStore({
  reducer: authReducer,
});

export default store;
