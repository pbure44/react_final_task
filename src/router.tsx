import {createBrowserRouter, Navigate} from "react-router-dom";
import path from "node:path";
import {MainLayout} from "./layouts";
import {LoginPage, MainPage, RegisterPage} from "./pages";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>,children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies',element:<MainPage/>
            },
            {
                path:'register', element:<RegisterPage/>
            },
            {
                path:'login', element:<LoginPage/>
            },
            {
                path:'movieinfo', element:<MovieInfo/>
            }
        ]
    }
])

export {
    router
}