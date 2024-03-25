import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";
import {AxiosError} from "axios";
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAll();
            return data;                                         //or return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
    }
})

const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    ...actions,
    getAll
}

export {
    movieActions,movieReducer
}