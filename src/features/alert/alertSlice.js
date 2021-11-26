import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAlert: false
}

export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showAlerts: (state, action) => {
            state = {showAlert: action.payload};
            return state;
        }
    }
})

export const { showAlerts } = alertSlice.actions 

export default alertSlice.reducer;