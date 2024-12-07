import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Anastasiia", email: "anastasiia@gmail.com" },
    { id: 2, name: "Vadym", email: "vadym@gmail.com" },
    { id: 3, name: "Max", email: "max@gmail.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users.users;

export default userSlice.reducer;
