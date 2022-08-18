import React from 'react'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './ToDoList';

function App() {
    // const [users,setUsers] = useState([])
    // const [currentUser,setCurrentUser] = useState({})
    // const fetchingData = async () => {
    //     console.log('retrieving data')
    //     let response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     let data = await response.json()
    //     setUsers(data)
    // }
    // // click event shows the details of users
    // const getDetailOfUser = (param) => { 
    //     console.log('testing detail',param)
    //     setCurrentUser(param) }
    
  return (
   <Container className="bg-warning text-light p-4">
    <ToDoList/>
       {/* <Row className="justify-content-center">
            <Col md={3}>
                <h1>Fetch Data</h1>
                <Button onClick={fetchingData}>Get Users Data</Button>
            </Col>
            <Col md={9}>
            <h1>User Details</h1>
            <p><Badge>Phone:</Badge> {currentUser.phone}</p>
            <p><Badge>Email:</Badge> {currentUser.email}</p>
            <p><Badge>Username:</Badge> {currentUser.username}</p>
            </Col>
            {users.map((user)=> (
            <div key={uuidv4()} onClick={() => getDetailOfUser(user)}><p>{user.name}</p></div>))}
       </Row> */}
   </Container>
  )
}

export default App