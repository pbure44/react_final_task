import {usePagination} from "../../hooks/usePagination";
import {MoviesList} from "../MoviesList/MoviesList";

import css from './MoviesPagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux";
import {UsePaginationReturn} from "../../interfaces";

const MoviesPagination = () => {
    let pagination: UsePaginationReturn = usePagination({contentPerPage: 20});
    const [genreid,setGenreid]=useState(0)
    const {moviesResponces} = useAppSelector(state => {

        if (state.moviesResponces.moviesResponces) {
            if (pagination.count != state.moviesResponces.moviesResponces.total_results) {
                pagination.setCount(state.moviesResponces.moviesResponces.total_results)
            }
            // if (pagination.page != state.moviesResponces.moviesResponces.page) {
            //     pagination.setPage(state.moviesResponces.moviesResponces.page)
            // }
        }
        return state.moviesResponces
    });

    const location = useLocation();

    const dispatch = useAppDispatch();


    useEffect(() => {
        console.log("MoviePagination", pagination)
        if (location.state) {
            console.log(genreid,location.state)
            if (genreid!=location.state){
                pagination.setPage(1);
            }
            setGenreid(location.state)
            dispatch(movieActions.getMoviesByGenre({genreid: location.state, page: pagination.page}))

        } else {
            dispatch(movieActions.getMoviesByPageNumber(pagination.page))
        }
    }, [location.state, pagination.page]);


    return (
        <div>
            <div>
                <MoviesList page={pagination.page} movies={moviesResponces ? moviesResponces.results : []}/>
            </div>
            <div className={css.pagination}>
                <p className={css.text}>
                    {pagination.page}/{pagination.totalPages}
                </p>
                <button onClick={pagination.prevPage}
                        className={`page ${pagination.page === 1 && "disabled"}`}>
                    &larr;
                </button>
                <button onClick={() => pagination.setPage(1)}
                        className={`page ${pagination.page === 1 && "disabled"}`}>
                    1
                </button>
                {pagination.gaps.before ? "..." : null}
                {/* @ts-ignore */}
                {pagination.gaps.paginationGroup.map((el) => (
                    <button onClick={() => pagination.setPage(el)}
                            key={el}
                            className={`page ${pagination.page === el ? "active" : ""}`}>
                        {el}
                    </button>
                ))}
                {pagination.gaps.after ? "..." : null}
                <button onClick={() => pagination.setPage(pagination.totalPages)}
                        className={`page ${pagination.page === pagination.totalPages && "disabled"}`}>
                    {pagination.totalPages}
                </button>
                <button onClick={pagination.nextPage}
                        className={`page ${pagination.page === pagination.totalPages && "disabled"}`}>
                    &rarr;
                </button>
            </div>

        </div>
    );
};

export {MoviesPagination};