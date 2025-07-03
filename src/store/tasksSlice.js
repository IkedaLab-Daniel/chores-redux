import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
    id: nanoid(),
    title,
    completed: false,
    assignedTo: ''
})

const initialState = [
    createTask('Order more energy drinks'),
    createTask('Water the plants')
]

// > slice
export const  taskSlice = createSlice({
    name: 'tasks',
    initialState,
    add: (state, action) => {
        const task = createTask(action.payload);
        state.push(task);
    },
    toggle: (state, action) => {
        const task = state.find(task => task.id === action.payload.taskId);
        task.completed = action.payload.completed;
    }
})