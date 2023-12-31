import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Movie from "./pages/Movie";
import News from "./pages/News";
import MovieDetail from "./pages/MovieDetail";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Movie />
    },
    {
        path : "/news",
        element : <News />
    },
    {
        path : "/movies/:moviesid",
        element : <MovieDetail />
    }
])

export default Router;