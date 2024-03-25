import {IRes} from "../types";

import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieResponce} from "../interfaces";

const movieService = {
    getAll: (): IRes<IMovieResponce> => apiService.get(urls.movie.base)
}

export {
    movieService
}