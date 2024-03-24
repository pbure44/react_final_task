const baseURL = 'https://api.themoviedb.org/3'

const auth = '/authentication/token/validate_with_login'
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
    }
}

export {
    baseURL,urls
}