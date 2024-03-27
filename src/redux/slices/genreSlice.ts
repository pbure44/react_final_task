import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services/genreService";

interface IState {
    genres: IGenre[]
}

const initialState:IState = {
    genres: []
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try{
            const {data} = await genreService.getAllGenres();
            return data.genres
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.genres = action.payload
            })
    }
})

const {reducer:genreReducer,actions} = genreSlice;

const genreActions={
    ...actions,
    getAll
}

export {
    genreActions,genreReducer
}