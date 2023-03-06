import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    currentUser: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  }
})

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;