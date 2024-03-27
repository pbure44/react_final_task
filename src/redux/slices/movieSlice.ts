import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            const totalMovies = data.total_results;
            return data.results;                                         //or return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const getMoviesByPageNumber = createAsyncThunk<IMovie[],number>(
    'movieSlice/getMoviesByPageNumber',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByPageNumber(page);
            return  data.results;
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)


const getMoviesByGenre = createAsyncThunk<IMovie[], {genreid:number,page:number}>(
    'movieSlice/getMoviesByGenre',
    async ({genreid, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genreid,page);
            return data.results;                                         //or return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
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
            .addCase(getMoviesByGenre.fulfilled,(state,action)=>{
                state.movies =action.payload
            })
            .addCase(getMoviesByPageNumber.fulfilled,(state,action)=>{
                state.movies = action.payload
            })
    }
})

const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    ...actions,
    getAll,
    getMoviesByGenre,
    getMoviesByPageNumber
}

export {
    movieActions,movieReducer
}