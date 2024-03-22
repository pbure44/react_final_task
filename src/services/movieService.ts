import {IRes} from "../types";
import {IMovie} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (): IRes<IMovie[]> => apiService.get(urls.movie.base)
}

export {
    movieService
}