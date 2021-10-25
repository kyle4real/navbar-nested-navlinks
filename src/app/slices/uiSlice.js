import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "dark",
        menuOpen: false,
    },
    reducers: {
        menuToggle(state) {
            state.menuOpen = !state.menuOpen;
        },
        menuClose(state) {
            state.menuOpen = false;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
