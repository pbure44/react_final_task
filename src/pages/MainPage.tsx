import {MoviesGenres} from "../components/MoviesGenres/MoviesGenres";
import {MoviesPagination} from "../components/Pagination/MoviesPagination";

const MainPage = () => {
    return (
        <div>
            <MoviesGenres/>
            <MoviesPagination/>
        </div>
    );
};

export {MainPage};