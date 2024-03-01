import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice.js";
import userSlice from "../features/userSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userSlice,
  },
});
