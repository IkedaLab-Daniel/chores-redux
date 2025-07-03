import { createSlice, nanoId } from '@reduxjs/toolkit';
const createHuman = (name) => ({
    id: nanoId(),
    name,
    taskIds: [],
})

const initialState = [
    createHuman('Alice'),
    createHuman('Bob'),
    createHuman('Charlie'),
    createHuman('Diana'),
    createHuman('Eve'),
]

// slice for managing humans
export const humanSlice = createSlice({
    name: 'human',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(createHuman(action.payload));
        }
    }
})