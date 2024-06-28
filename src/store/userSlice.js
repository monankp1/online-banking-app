import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    isLoggedIn: false,
    userName: '',
    account: '',
    balance: '',
    users: [],
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
            state.userName = action.payload.userName;
            state.account = action.payload.account;
            state.balance = action.payload.balance;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.userName = '';
            state.account = '';
            state.balance = '';
        },
        fetchUsers: (state, action) => {
            state.users = action.payload;
        },
        updateBalance: (state, action) => {
            state.balance = action.payload;
        },
        // transferMoney: (state, action) => {

        // }
    }
});

export const { loginUser, logoutUser, fetchUsers, updateBalance } = userSlice.actions;

export default userSlice.reducer;












