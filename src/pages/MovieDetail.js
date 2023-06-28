import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {

    const { moviesid } = useParams();

    const [movie, setMovie] = useState({});

    const getMovieInfo = async () => {

        const address = `https://api.themoviedb.org/3/movie/${moviesid}?api_key=082f2526d129a66e53e595b94fce8985&language=ko-KR`

        try {

            const result = await axios.get(address)
            setMovie(result.data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getMovieInfo()
    }, [])

    return (
        <div>
            <h1>{moviesid}</h1>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetail;