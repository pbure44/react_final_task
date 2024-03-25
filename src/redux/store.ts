import {configureStore} from "@reduxjs/toolkit";

import {authReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        auth: authReducer,
        movies:movieReducer
    }
})

export {
    store
}