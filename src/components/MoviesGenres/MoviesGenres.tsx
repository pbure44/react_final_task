import {useEffect} from "react";

import css from './MoviesGenres.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "./Genre";
const MoviesGenres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);

    return (
        <div className={css.MoviesGenres}>
            <h3>MoviesGenres</h3>
            <div className={css.genres}>{genres.map(genre => <Genre key={genre.id} genre={genre}/>)}</div>

        </div>
    );
};

export {MoviesGenres};