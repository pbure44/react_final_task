import {MoviesGenres} from "../components/MoviesGenres/MoviesGenres";
import {MoviesList} from "../components/MoviesList/MoviesList";

const MainPage = () => {
    return (
        <div>
            <MoviesGenres/>
            <MoviesList/>
        </div>
    );
};

export {MainPage};