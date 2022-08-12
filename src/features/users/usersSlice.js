import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Urmil Bhavsar' },
    { id: '1', name: 'Rishabh Pant' },
    { id: '2', name: 'Virat Kohli '}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer