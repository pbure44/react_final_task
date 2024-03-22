import {MainPage} from "../pages";
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {MoviesGenres} from "../components/MoviesGenres/MoviesGenres";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <MoviesGenres/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};