import {usePagination} from "../../hooks/usePagination";
import {MoviesList} from "../MoviesList/MoviesList";


const MoviesPagination = () => {

    const {
        nextPage,
        prevPage,
        page,
        gaps,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 20,
        count: 1120,
    });

    console.log("MoviesPagination", page)

    return (
        <div>
            <div className="items">
                <MoviesList page={page}/>
            </div>
            <div className="pagination">
                <p className="text">
                    {page}/{totalPages}
                </p>
                <button onClick={prevPage}
                        className={`page ${page === 1 && "disabled"}`}>
                    &larr;
                </button>
                <button onClick={() => setPage(1)}
                        className={`page ${page === 1 && "disabled"}`}>
                    1
                </button>
                {gaps.before ? "..." : null}
                {/* @ts-ignore */}
                {gaps.paginationGroup.map((el) => (
                    <button onClick={() => setPage(el)}
                            key={el}
                            className={`page ${page === el ? "active" : ""}`}>
                        {el}
                    </button>
                ))}
                {gaps.after ? "..." : null}
                <button onClick={() => setPage(totalPages)}
                        className={`page ${page === totalPages && "disabled"}`}>
                    {totalPages}
                </button>
                <button onClick={nextPage}
                        className={`page ${page === totalPages && "disabled"}`}>
                    &rarr;
                </button>
            </div>

        </div>
    );
};

export {MoviesPagination};