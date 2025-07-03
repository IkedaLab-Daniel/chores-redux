import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTasks = (title) => ({
    id: nanoid(),
    title,
    completed: false,
    assignedTo: ''
})

const initialState = [
    createTasks('Order more energy drinks'),
    createTasks('Water the plants')
]

// > slice
export const  taskSlice = createSlice({
    name: 'tasks',
    initialState,
    add: (state, action) => {
        const task = createTask(action.payload);
        state.push(task);
    }
})