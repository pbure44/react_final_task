import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, []);

    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};