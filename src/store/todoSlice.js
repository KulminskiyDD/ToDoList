import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addToDo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeToDo(state, action) {},
    toggleToDoComplete(state, action) {},
  },
});

export const { addToDo, removeToDo, toggleToDoComplete } = todoSlice.actions;

export default todoSlice.reducer;
