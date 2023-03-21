import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    currentUser: null,
    accessToken: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  }
})

export const { loginSuccess, logoutSuccess, setUser } = authSlice.actions;

export default authSlice.reducer;