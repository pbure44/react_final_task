import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {

}

const initialState = {}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAll();
            return data;                                         //or return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error=e as AxiosError
            return
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {

    }
})

