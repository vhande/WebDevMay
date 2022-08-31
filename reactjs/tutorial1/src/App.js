import React, { useState } from 'react'
import {Container, Row, Col, Button, InputGroup, Form} from 'react-bootstrap'

function App() {
  const [sayi,setSayi] = useState(0)
  const IncreaseNumber = (e) => {
    if (sayi >= 10) {
      alert('Max Value')
    } else {
      setSayi(sayi + 1)
    }
    console.log('+')
  }
  const DecreaseNumber = (e) => {
    if (sayi !== 0) {
    setSayi(sayi - 1) 
  } else {
    alert('Not allowed')
  }
    console.log('-')
  }
  const [username,setUsername] = useState("none")
  const [show, setShow] = useState('false')

  const userFunc = (e) => {
    setUsername(username == document.getElementById('input'))
    console.log(e.target.value)
    setUsername(e.target.value) // the moment sth change in the page, it will upgraded to the new value
  }
  return (
    <Container fluid={true}>
      
      <Row className="justify-content-center">
        <Col className="bg-danger p-5 text-center text-light" md={5}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={userFunc}
            />
          </InputGroup>
          <Button size='lg' variant="light" className="rounded-0 mb-2" onClick={() => setShow(!show)}>Display Username</Button>
          <h1>{show ? username:''}</h1>
          <br/>
          <Button onClick={IncreaseNumber} size="lg" variant='primary'>INCREASE NUMBER+</Button>
        </Col>
        <Col className="bg-success p-5 text-center text-light" md={5}>
        <Button onClick={DecreaseNumber} size="lg" variant='primary'>DECREASE NUMBER-</Button>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col md={10} className="bg-warning p-5 text-center">
          <h1>{sayi}</h1>
        </Col>
      </Row> 
    </Container>
  )
}

export default App