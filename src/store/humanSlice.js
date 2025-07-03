import { nanoid } from "@reduxjs/toolkit";

const createHumans = (name) => ({
    id: nanoid(),
    name
})

const initialState = [
    createHumans("John Doe"),
    createHumans("Jane Smith"),
]

// > slice for managing human entities
export const humanSlice = createSlice({
    name: 'human',
    initialState,
    reducers: {
        addHuman: (state, action) => {
            state.push(createHumans(action.payload.name));
        },
        removeHuman: (state, action) => {
            return state.filter(human => human.id !== action.payload.id);
        },
        updateHuman: (state, action) => {
            const { id, name } = action.payload;
            const human = state.find(human => human.id === id);
            if (human) {
                human.name = name;
            }
        }
    }
})