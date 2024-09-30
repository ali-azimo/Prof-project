import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,

};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSucess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFulure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});
export const { signInStart, signInSucess, signInFulure } = userSlice.actions;
export default userSlice.reducer;