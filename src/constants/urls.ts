const baseURL = 'https://api.themoviedb.org/3'

const auth = '/authentication'
const users = '/users'
const movie = '/discover/movie'
const genres = '/genre/movie/list'
const search = '/search/movie'


const urls = {
    auth: {
        login: auth,
        register: users,
        me:(account_id:number):string=>`account/${account_id}`
    },
    movie: {
        base: movie
    },
    genres: {
        list: genres
    },
    search: {
        base: search
    },
    poster: {
        base: 'https://media.themoviedb.org/t/p/w220_and_h330_face'
    }
}

export {
    baseURL,urls
}