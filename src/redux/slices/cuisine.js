import { createSlice } from "@reduxjs/toolkit";

const cuisineSlice = createSlice({
    name: "cuisine",
    initialState: {cuisine:[]},
    reducers: {
        pushAllItems(state, action) {
            return {
                ...state,
                cuisine: action.payload
            };
        },
        removeAllItems(state) {
            return {
                ...state,
                cuisine: []
            };
        }
    }
});

export const { pushAllItems, removeAllItems } = cuisineSlice.actions;
export default cuisineSlice.reducer;