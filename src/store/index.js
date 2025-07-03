import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: (state = {}) => state, // Placeholder for humans slice
  }
});