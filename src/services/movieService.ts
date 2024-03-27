import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IMovieResponce} from "../interfaces";


const movieService = {
    getAll: (): IRes<IMovieResponce> => apiService.get(urls.movie.base),
    getMoviesByGenre:(genreid:number,page:number):IRes<IMovieResponce>=>apiService.get(urls.movie.base,{params:{with_genres:genreid,page:page}}),
    getMoviesByPageNumber:(page:number):IRes<IMovieResponce>=>apiService.get(urls.movie.base,{params:{page}})
}

export {
    movieService
}