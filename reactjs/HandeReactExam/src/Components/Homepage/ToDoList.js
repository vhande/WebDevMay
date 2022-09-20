import React from 'react'
import { useState, useRef } from 'react'
import { Container, InputGroup, Form, Button, ListGroup, Badge } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'

function ToDoList() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const inputHook = useRef(null)
  const getInput = (e) => {
      console.log("Handle input", e.target.value)
    setTask(e.target.value) }
    
    const clickEvent = () => {
          console.log( "Click",)
        setList([...list,task])
        inputHook.current.value = "" }

      
  const deleteAll = () => {
        setList("") }
        
      
  const deleteOne = (e) => {
        setList(list.filter(item=> item !== e.target.value)) }
         

      return (
        <Container fluid className="d-flex flex-column my-5 ">
      <>
           <div className="my-5 lead display-flex text-center">
        Write something to do:
            </div>
          <div className="my-3 mx-4">
          <InputGroup size="sm" className="mb-4">
        <Form.Control
            label="Small"
                aria-describedby="inputGroup-sizing-sm"
                  onChange={getInput}
                  ref={inputHook}/>
                <Button onClick={clickEvent} className="btn-secondary px-3">Add</Button>
                </InputGroup>
              </div>
              <div>
              <ListGroup className="d-flex mx-4 justify-content-center">
                {list !== "" ? list.map(item => <ListGroup.Item className="d-flex justify-content-between">{item} <span><Button size="sm" className="btn-secondary" value={item} onClick={deleteOne}>Delete
    </Button></span></ListGroup.Item> ) : ""}
                  </ListGroup>
                    </div>  
                      <div className="d-flex justify-content-center mt-4">
                          <Button size="sm" className="btn-secondary " onClick={deleteAll}>Delete All</Button>
                      </div>
                      </>
    </Container>
                    
      )
  }
                        
  export default ToDoList                      