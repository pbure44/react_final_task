export interface UsePaginationProps {
    contentPerPage: number,
    count: number,
}
export interface UsePaginationReturn {
    page: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
    gaps: { before: boolean; paginationGroup: number[]; after: boolean };
}