import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Moviecard({movie}) {
  return (
  
<li key={movie.id} id="movie1" data-toggle="modal" data-target="#moviedetail">
        <div className="movie">
          <figure className="movie__figure">
          <Link to={`/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}className="movie__poster"/></Link>
            <figcaption><span className="movie__vote">{movie.vote_average}</span></figcaption>
            <h2 className="movie__title">{movie.original_title}</h2>
          </figure>
        </div>
      </li>

  )
}

export default Moviecard