import {FC, PropsWithChildren, useEffect} from "react";
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import css from './MoviesList.module.css'
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {IMovie} from "../../interfaces";


interface IProps extends PropsWithChildren {
    page: number
    movies: IMovie[]
}

const MoviesList: FC<IProps> = ({page,movies}) => {


    return (
        <div className={css.body}>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};