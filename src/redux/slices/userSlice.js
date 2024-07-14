import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../components/data";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: userList,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
