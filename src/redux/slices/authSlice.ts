import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces";
import {authService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    registerError: string
    loginError: string
}

const initialState: IState = {
    registerError: null,
    loginError: null
}

const register = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const login = createAsyncThunk<void,{ user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.login(user)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.rejected, state => {
                state.registerError = 'Username already exists'
            })
            .addCase(login.rejected, state => {
                state.loginError = 'Wrong username or password'
            })
            .addMatcher(isFulfilled(register, login), state => {
                state.registerError = null
                state.loginError = null
            })
    }
});

const {reducer: authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register,
    login
}

export {
    authReducer, authActions
}