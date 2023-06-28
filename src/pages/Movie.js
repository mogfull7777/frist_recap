import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Movie = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {

        const address = "https://api.themoviedb.org/3/discover/movie?api_key=082f2526d129a66e53e595b94fce8985&language=ko-KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

        try {

            const res = await axios.get(address)
            // console.log(res.data.results);
            setMovies(res.data.results);


        } catch (err) {
            console.log(err);
        };

    };

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Container>
            <Row>
                {movies && movies.map(m => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + m.poster_path} />
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                                <Card.Text>
                                    {m.overview}
                                </Card.Text>
                                <Card.Text>
                                    {m.vote_average}
                                </Card.Text>
                                <Button variant="primary">
                                    <Link to={`/movies/${m.id}`}>
                                        Go somewhere
                                    </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Movie;