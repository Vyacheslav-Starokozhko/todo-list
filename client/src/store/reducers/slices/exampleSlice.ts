import { createSlice } from "@reduxjs/toolkit";

interface ExampleState {
    data: string;
    loading: boolean;
}

const initialState: ExampleState = {
    data: "",
    loading: false,
};

const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        fetchDataRequest: (state) => {
            state.loading = true;
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state) => {
            state.loading = false;
        },
    },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = exampleSlice.actions;
export default exampleSlice.reducer;
