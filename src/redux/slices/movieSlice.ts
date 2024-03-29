import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../services";
import {IMovie, IMovieResponce} from "../../interfaces";

interface IState {
    moviesResponces: IMovieResponce
}

const initialState: IState = {
    moviesResponces: null
}

// const getAll = createAsyncThunk(
//     'movieSlice/getAll',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getAll();
//             const totalMovies = data.total_results;
//             return data.results;                                         //or return thunkAPI.fulfillWithValue(data)
//         } catch (e) {
//             const error = e as AxiosError
//             return rejectWithValue(error.response.data)
//         }
//     }
// )

const getMoviesByPageNumber = createAsyncThunk<IMovieResponce,number>(
    'movieSlice/getMoviesByPageNumber',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByPageNumber(page);
            return  data;
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)


const getMoviesByGenre = createAsyncThunk<IMovieResponce, {genreid:number,page:number}>(
    'movieSlice/getMoviesByGenre',
    async ({genreid, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genreid,page);
            return data;                                         //or return thunkAPI.fulfillWithValue(data)
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
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.moviesResponces = action.payload
            // })
            .addCase(getMoviesByGenre.fulfilled,(state,action)=>{
                state.moviesResponces =action.payload
            })
            .addCase(getMoviesByPageNumber.fulfilled,(state,action)=>{
                state.moviesResponces = action.payload
            })
    }
})

const {reducer:movieReducer,actions} = movieSlice;

const movieActions={
    ...actions,
    // getAll,
    getMoviesByGenre,
    getMoviesByPageNumber
}

export {
    movieActions,movieReducer
}