
export interface UsePaginationReturn {
    page: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
    gaps: { before: boolean; paginationGroup: number[]; after: boolean };
    count:number;
    setCount:(count:number)=>void;
}