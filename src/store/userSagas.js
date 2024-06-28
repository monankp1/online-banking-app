import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BACKEND_ENDPOINT } from '../api/api';
import { loginUser, logoutUser, fetchUsers, updateBalance } from './userSlice';

function* handleLogin(action) {
    const { userName, password } = action.payload;

    try {
        const response = yield call(axios.get, `${BACKEND_ENDPOINT}/users`);
        const users = response.data;
        const user = users.find(user => user.userName === userName && user.password === password);
        console.log(user)

        if (user) {
            yield put(loginUser({
                userName: user.userName,
                account: user.account,
                balance: user.balance
            }));
            toast.success(`Welcome to National Bank!! ${user.userName}`, {
                position: "top-center",
                theme: 'colored',
                autoClose: 3000,
                closeOnClick: true,
            })
        } else {
            toast.error("Invalid username or password!!! Please try again.", {
                position: "top-center",
                theme: 'colored',
                autoClose: 5000,
                pauseOnHover: true,
            })
            console.error('Invalid credentials hello');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function* handleLogout() {
    try {
        yield put(logoutUser());
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

function* handleFetchUsers() {
    try {
        const response = yield call(axios.get, `${BACKEND_ENDPOINT}/users`);
        yield put(fetchUsers(response.data));
    } catch (error) {
        console.error(error);
    }
}

function* handleUpdateBalance(action) {
    try {
        const { newBalance } = action.payload;
        yield put(updateBalance(newBalance));
    } catch (error) {
        console.error('Error updating balance:', error);
    }
}

function* handleTransferMoney(action) {
    try {
        const response = yield call(axios.get, `${BACKEND_ENDPOINT}/users`);
        const users = response.data;

        const { receiverAccount, senderAccount } = action.payload;
        let { amount } = action.payload;

        amount = parseInt(amount);

        const sender = users.find((user) => user.account === senderAccount);
        console.log(sender);
        const senderId = sender.id;

        if (amount < sender.balance) {
            const receiver = users.find((user) => user.account === receiverAccount);
            const receiverId = receiver.id;
            const newBalance = receiver.balance + amount;
            const receiverResponse = yield call(axios.put, `${BACKEND_ENDPOINT}/users/${receiverId}`, {
                ...receiver,
                balance: newBalance
            });
            const sendersBalance = sender.balance - amount;
            const senderResponse = yield call(axios.put, `${BACKEND_ENDPOINT}/users/${senderId}`, {
                ...sender,
                balance: sendersBalance
            })

            yield put(updateBalance(sendersBalance));
            toast.success(`${amount}/- Rs Transferred Successfully`, {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                theme: 'colored',
            });
        } else {
            toast.error(`Insufficient balance!!! Your current balance is ${sender.balance}/- `, {
                position: "top-center",
                autoClose: 7000,
                pauseOnHover: true,
                theme: 'colored',
            });
        }

    } catch (error) {
        console.error('Error transferring money:', error);
    }
}


function* watchLogin() {
    yield takeEvery('user_login', handleLogin);
}

function* watchLogout() {
    yield takeEvery('user_logout', handleLogout);
}
function* watchFetchUsers() {
    yield takeEvery('user_fetchUsers', handleFetchUsers);
}

function* watchUpdateBalance() {
    yield takeEvery('user_updateBalance', handleUpdateBalance);
}

function* watchTransferMoney() {
    yield takeEvery('user_transferMoney', handleTransferMoney);
}

export {
    watchLogin,
    watchLogout,
    watchFetchUsers,
    watchUpdateBalance,
    watchTransferMoney
};