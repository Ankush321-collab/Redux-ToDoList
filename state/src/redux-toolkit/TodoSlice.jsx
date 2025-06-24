import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [
    {
      id: 0,
      title: null,
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todo.push(action.payload);
    },
    updatetodoss: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addtodo, updatetodoss } = todoSlice.actions;
export default todoSlice.reducer;
