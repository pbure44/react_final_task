import {useEffect, useState} from "react";
import {UsePagination} from "../react-app-env";

interface Gap {
    before: boolean;
    paginationGroup: number[];
    after: boolean;
}

const usePagination: UsePagination = ({contentPerPage}) => {
    const [count, setCount] = useState(100);
    const [page, setPage] = useState(1);
    const [gaps, setGaps] = useState<Gap>({
        before: false,
        paginationGroup: [],
        after: true,
    });

    function pageCount() {
        return Math.ceil(count / contentPerPage)
    }
    const [pagesInBetween, setPagesInBetween] = useState<number[]>([]);

    useEffect(() => {
        if (pageCount() > 2) {
            const temp = new Array(pageCount() - 2).fill(1).map((_, i) => i + 2);
            setPagesInBetween(temp);
        }
    }, [count]);

    useEffect(() => {
        const currentLocation = pagesInBetween.indexOf(page);
        let paginationGroup = [];
        let before = false;
        let after = false;
        if (page === 1) {
            paginationGroup = pagesInBetween.slice(0, 3);
        } else if (
            page === pageCount() ||
            page === pageCount() - 1 ||
            page === pageCount() - 2
        ) {
            paginationGroup = pagesInBetween.slice(-3, pageCount());
        } else if (page === 2) {
            paginationGroup = pagesInBetween.slice(
                currentLocation,
                currentLocation + 3
            );
        } else {
            paginationGroup = [page - 1, page, page + 1];
        }
        if (pageCount() <= 5) {
            before = false;
            after = false;
        } else {
            before = false;
            after = false;
            if (paginationGroup[0] > 2) {
                before = true;
            }
            if (paginationGroup[2] < pageCount() - 1) {
                after = true;
            }
        }
        setGaps({paginationGroup, before, after});
    }, [page, pagesInBetween, count]);

    const changePage = (direction: boolean) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount()) {
                    return state;
                }
                return state + 1;
            } else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };

    const setPageSAFE = (num: number) => {
        console.log("setPageSAFE", num)
        if (num > pageCount()) {
            setPage(pageCount());
        } else if (num < 1) {
            setPage(1);
        } else {
            setPage(num);
        }
    };

    return {
        totalPages: pageCount(),
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSAFE,
        page,
        gaps,
        count,
        setCount
    };
};

export {usePagination};