import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {users: [], loading: false, error: null},
    reducers: {
        usersRequest: (state) => {
            state.loading = true;
        },
        usersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        usersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {usersRequest, usersSuccess, usersFailure} = usersSlice.actions;

export default usersSlice.reducer;