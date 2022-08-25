import React from 'react'
import CarouselCommponent from './components/Homepage/CarouselCommponent'
import {Container} from 'react-bootstrap'

function Home() {
  return (
    <Container fluid className='p-0'>
      <CarouselCommponent/>
    </Container>
  )
}

export default Home