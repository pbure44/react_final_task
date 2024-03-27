import {FC, PropsWithChildren, useEffect} from "react";
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './MoviesList.module.css'
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


interface IProps extends PropsWithChildren {
    page: number
}

const MoviesList: FC<IProps> = ({page}) => {
    const {movies} = useAppSelector(state => state.movies);

    const location = useLocation();

    const dispatch = useAppDispatch();


    useEffect(() => {
        if (location.state) {
            const genreid = location.state
            dispatch(movieActions.getMoviesByGenre({genreid, page}))

        } else {
            dispatch(movieActions.getMoviesByPageNumber(page))
        }
    }, [location.state, page]);

    return (
        <div className={css.body}>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};