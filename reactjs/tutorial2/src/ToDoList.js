import React from 'react'
import {Container, Row, Col, Form, Button, InputGroup} from 'react-bootstrap'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
    const [todo, setToDo] = useState('') // to keep single to do
    const [todos, setToDos] = useState([]) // all of them
    const handleInput = (e) => {
        console.log("Handle input", e.target.value, e.target)
        setToDo(e.target.value)
    }
    const handleClick = () => {
        console.log("Click", todo)
        setToDos([...todos,todo])
    }
  return (
    <Row className="justify-content-center">
        <Col md={6}>
            <InputGroup className="mb-3">
                <Form.Control onChange={handleInput}
                placeholder="todo"
                aria-label="todo"
                aria-describedby="basic-addon1"></Form.Control>
                <Button onClick={handleClick}>Add</Button>
                {console.log(todos)}
            </InputGroup>
            <hr/>
            <ul>
            {   
                todos.map(task => (
                    <li key={uuidv4()}>{task}</li>
                ))
            }
            </ul>
        </Col>
    </Row>
  )
}

export default ToDoList