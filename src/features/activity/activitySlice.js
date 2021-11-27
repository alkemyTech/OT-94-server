import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListActivities = createAsyncThunk (
    "listActivities/getListActivities",
    async (dispatch, getState) => {
        const response = await axios.get(`${dispatch}`)
        return response.data;
    }
);

const activitySlice = createSlice({
    name: "listActivity",
    initialState: {
        listActivities: [],
        status: null
    },
    extraReducers: {
        [getListActivities.pending]: (state, action) => {
            state.status = "loading";
        }, 
        [getListActivities.fulfilled]: (state, action) => {
            state.status = "success";
            state.listActivities = action.payload; 
        },
        [getListActivities.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
}) 

export default activitySlice.reducer;