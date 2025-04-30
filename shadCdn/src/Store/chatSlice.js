import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      const newChat = {
        id: nanoid(),
        text: action.payload.text,
        role: action.payload.role, 
      };
      state.chats.push(newChat);
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
