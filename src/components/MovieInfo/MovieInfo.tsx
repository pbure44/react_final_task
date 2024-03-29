import {useLocation} from "react-router-dom";
import StarRatings from "react-star-ratings";
import {useEffect} from "react";

import {urls} from "../../constants/urls";
import css from './MovieInfo.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {Genre} from "../MoviesGenres/Genre";


const MovieInfo = () => {
    const location = useLocation();
    const {
        title,
        original_title,
        original_language,
        poster_path,
        release_date,
        vote_average,
        vote_count,
        popularity,
        overview,
        genre_ids
    } = location.state
    const poster = urls.poster.base + poster_path;

    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);


    return (
        <div className={css.MovieInfo}>
            <h1>Movie Title: "{title}"</h1>
            <h3>Original title: "{original_title}"</h3>
            <img className={css.img} src={poster} alt={title}/>
            <div>Rating: <StarRatings rating={vote_average} starRatedColor="yellow" starEmptyColor="grey"
                                      numberOfStars={10} name='vote_average' starDimension="20px" starSpacing="4px"/>
            </div>
            <p>Genres: {genres.filter((genre) => genre_ids.includes(genre.id)).map(genre => <Genre key={genre.id}
                                                                                                   genre={genre}/>)}</p>
            <p>Release date: {release_date}</p>
            <p>Original language: "{original_language}"</p>
            <p>Vote count: {vote_count}</p>
            <p>Popularity: {popularity}</p>
            <h5>Overview:<p>{overview}</p></h5>
        </div>
    );
};

export {MovieInfo};