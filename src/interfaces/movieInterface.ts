export interface IMovie{
    id:number;
    title:string;
    vote_average:number;
    poster_path:string;
    release_date:string;
    overview:string;
}
export interface IMovieResponce{
    page:number;
    results:IMovie[];
}