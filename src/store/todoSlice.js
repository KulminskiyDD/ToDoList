import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addToDo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeToDo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleToDoComplete(state, action) {
      const toggleToDo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleToDo.completed = !toggleToDo.completed;
    },
  },
});

export const { addToDo, removeToDo, toggleToDoComplete } = todoSlice.actions;

export default todoSlice.reducer;
