import React, { useEffect, useState } from 'react'
import CarouselCommponent from './components/Homepage/CarouselCommponent'
import {Container, Row,Col,Button,ButtonGroup} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup';
import Moviecard from './components/Homepage/Moviecard';

function Home({filteredMovies,next,prev,page,searchFilm}) {
  const [movies,setMovies] = useState([])
  // const[page,setPage] = useState(1);
  // const nextPage = () => {
  //   setPage(page+1)  }
  // const prevPage = () => {
  //     if (page > 1)
  //     setPage(page-1)
  //         }

  const fetchMovie = async () => {
    let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}`)
    let data = await res.json()
    setMovies(data.results)
   
  }

  useEffect(()=>{
    fetchMovie()
  },[page])
   {console.log(page)}


  return (
    <>
    <Container fluid={true} className="p-0">
      <CarouselCommponent/>
      {
       
      }
    </Container>
    <ul className="movies p-4 bg-dark">
        {/* {
          movies !=undefined?
          movies.map((movie,index)=>(
            <Moviecard movie={movie} test={'this is a test props data'}/>
          ))
          :
          ''
        } */}

    {console.log(filteredMovies)}

        {filteredMovies.length !== 0 && searchFilm !== "" && filteredMovies !=undefined ?
        filteredMovies.map(item => (<Moviecard movie={item}/>)) :  movies.map((movie,index)=>(
          <Moviecard movie={movie} test={'this is a test props data'}/>
        ))}
      </ul>

      <ButtonGroup aria-label="Basic example" className="pagination d-flex justify-content-center">
      <Button onClick={prev}variant="secondary rounded-0">Previous</Button>
      <Button onClick={next} variant="secondary rounded-0">Next</Button>
    </ButtonGroup>
    </>
  )
}

export default Home