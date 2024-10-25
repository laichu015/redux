import { createSlice } from "@reduxjs/toolkit";
import todoData from "../../assets/api/todoData";

const initialState = {
  tododata: todoData,
  filter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tododata.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const index = state.tododata.findIndex(
        (todo) => todo.id === action.payload
      );
      if (index !== -1) {
        state.tododata[index].isChk = !state.tododata[index].isChk;
      }
    },
    removeTodo: (state, action) => {
      state.tododata = state.tododata.filter(
        (todo) => todo.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const index = state.tododata.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.tododata[index].text = newText;
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
