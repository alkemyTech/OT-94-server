import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSlidesList = createAsyncThunk (
    "slidesList/getSlidesList",
    async (dispatch, getState) => {
        const response = await axios.get(`${dispatch}`)
        return response.data;
    }
);


const slidesSlice = createSlice({
    name: "slides",
    initialState: {
        slides: [],
        status: null
    },
    extraReducers: {
        [getSlidesList.pending]: (state, action) => {
            state.status = "loading data"
        },
        [getSlidesList.fulfilled]: (state, action) => {
            state.status = "success";
            state.slides = action.payload;
        },
        [getSlidesList.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
})

export default slidesSlice.reducer;