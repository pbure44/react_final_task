import {IRes} from "../types";
import {IGenreResponce} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const genreService ={
    getAllGenres:():IRes<IGenreResponce>=>apiService.get(urls.genres.base)
}

export {
    genreService
}