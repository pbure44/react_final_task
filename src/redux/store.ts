import {configureStore} from "@reduxjs/toolkit";

import {authReducer, genreReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        auth: authReducer,
        moviesResponces:movieReducer,
        genres:genreReducer
    }
})

export {
    store
}