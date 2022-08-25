import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

function Moviecard({movie}) {
  return (
  
    <Card>
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
    <Card.Body>
      <Card.Title>{movie.original_title}</Card.Title>
      <Card.Text>
        {console.log(movie)}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  )
}

export default Moviecard