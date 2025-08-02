import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("isLoggedIn") === "1",
  },
  reducers: {
    login(state) {
      localStorage.setItem("isLoggedIn", "1");
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem("isLoggedIn");
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
