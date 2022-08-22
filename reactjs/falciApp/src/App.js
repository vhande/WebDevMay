import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { faker } from '@faker-js/faker';

function App() {
    const [femaleName,setFemaleName] = useState({})
    const [maleName, setMaleName] = useState({})
    const fetchFemale = async () => {
        const randomFemale = faker.name.firstName('female')
        const res = await fetch (`https://arkakapi.herokuapp.com/https://who1am.herokuapp.com/${randomFemale}`)
        const data = await res.json()
        setFemaleName(data)
        console.log(femaleName)
     }
    
    const fetchMale = async () => {
            const randomMale = faker.name.firstName('male')
            const res = await fetch (`https://arkakapi.herokuapp.com/https://who1am.herokuapp.com/${randomMale}`)
            const data = await res.json()
            setMaleName(data)
            console.log(maleName)
     }

  return (
    <Container fluid>
        <Row className="justify-content-center">
            <Col className="mt-5">
    <Button onClick={fetchFemale} >Where is my future wife?</Button>
         <ul>
            <li>
                {femaleName.age != undefined ?
                `Her name is ${femaleName.age.name}.`:
                ""}
            </li>
            <li>
                {femaleName.age != undefined ?
                `She is ${femaleName.age.age} years old.`:
                ""}
            </li>
            <li>
                {
                femaleName.nation != undefined ?
                `She is waiting for you in ${femaleName.nation.country[0].country_id}.`:
                ""}
            </li>
        </ul>
            </Col>
            <Col className="mt-5">
    <Button onClick={fetchMale} >Where is my future husband?</Button>
    <ul>
            <li>
                {maleName.age != undefined ?
                `His name is ${maleName.age.name}.`:
                ""}   
            </li>
            <li>
                {maleName.age != undefined ?
                `He is ${maleName.age.age} years old.`:
                ""}
            </li>
            <li>
                {maleName.nation != undefined ?
                `He is waiting for you in ${maleName.nation.country[0].country_id}.`:
                ""}
            </li>
        </ul>
            </Col>
        </Row>
    

    </Container>
  )
}

export default App