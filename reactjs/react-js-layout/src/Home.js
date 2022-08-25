import React, { useEffect, useState } from 'react'
import CarouselCommponent from './components/Homepage/CarouselCommponent'
import {Container} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup';
import Moviecard from './components/Homepage/Moviecard';

function Home() {
  const [movies,setMovies] = useState([])

  const fetchMovie = async () => {
    let res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1')
    let data = await res.json()
    setMovies(data.results)
  }

  useEffect(()=>{
    fetchMovie()
  },[])


  return (
    <Container fluid className='p-0'>
      <CarouselCommponent/>
      <CardGroup>
     {
     movies != undefined ?
     movies.map((item,index) => {
      return (
        <Moviecard movie={item}/>
      )
     })
    :""}
      </CardGroup>
    </Container>
  )
}

export default Home