import React from 'react'
import ToDoList from './Components/Homepage/ToDoList'
import {Container} from 'react-bootstrap'

function Home() {
  return (
    <Container fluid>
    <ToDoList/>
    </Container>
  )
}

export default Home