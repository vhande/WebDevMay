import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap'
function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([]);
    const { movie_id } = useParams();
    const [movieTrailer,setMovieTrailer] = useState("");
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovieDetail(data)
            })
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
        .then(res=> res.json())
        .then(data=> setMovieTrailer(data.results[0].key))
        console.log(movieTrailer)
    }, []);

    return (
        <Container className="wrapper bg-dark p-0" fluid>
            <div className="p-5 bg-primary text-white movie-img" style={{ 'background': `url(https://image.tmdb.org/t/p/w500${movieDetail.poster_path})` }}>
                <h1 className='text-center bg-dark'>{movieDetail.original_title}</h1>
            </div>
            <Row className="p-0 m-4">
                <Col clasName="p-3" md={4}>
                    <ListGroup>
                        <ListGroup.Item className="bg-none text-light border-0"><Badge bg="warning" text="dark">
                            IMDB Score: {Math.floor(movieDetail.vote_average)}<p className="text-dark d-inline bg-light"></p></Badge></ListGroup.Item>
                        <ListGroup.Item className="bg-none text-light border-0"><Badge bg="warning" text="dark">
                            Language:  <p className= 'rounded d-inline'>{
                                movieDetail.original_language !== undefined ?
                                    movieDetail.original_language.toUpperCase()
                                    :
                                    ''
                            }</p></Badge></ListGroup.Item>
                        <ListGroup.Item className="bg-none text-light border-0"><Badge bg="warning" text="dark">
                            Category: {movieDetail.genres !== undefined ? movieDetail.genres.map(item=>(<ListGroup.Item className="bg-warning" style={{"border":"none"}}>{item.name}</ListGroup.Item>)) : ""}
                            </Badge></ListGroup.Item>
                            <ListGroup.Item className="bg-none text-light border-0"><Badge bg="warning" text="dark">Production: {movieDetail.production_companies !== undefined ? movieDetail.production_companies.map(item=>(<ListGroup.Item className="bg-warning" style={{"border":"none"}}>{item.name}</ListGroup.Item>)) : ""}</Badge></ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col className=" text-center text-light" md={8}>
                <p>{movieDetail.overview}</p>
                <div className="videoWrapper">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${movieTrailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Col>
            </Row>
        </Container>
    )
}
export default MovieDetail