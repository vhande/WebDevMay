import React from 'react'
import {useState} from 'react'
import {Button, Container, Row, Col, Form} from 'react-bootstrap'
import {FiRefreshCw} from 'react-icons/fi';
import * as ReactDOMClient from 'react-dom/client';

function App() {
    
    const [info, setInfo] = useState([])
    const [current, setCurrent] = useState([])
    const fetchData = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR'

    const res =  await fetch(proxyUrl + targetUrl)
    const data = await res.json()
    setInfo(data.data)
    }



    // function capitalizeFirstLetter(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
      
     
    // const search = (e) => {
      
    //           var element = info.filter(item => item.name === capitalizeFirstLetter(document.getElementById('x').value))
    //           setCurrent(element)
              

    //          var domelement = (<li>{current.name} -></li>)

    //          const container = document.getElementById('deneme');
    //          const root = ReactDOMClient.createRoot(container);
    //          root.render(domelement);

             
        
            

           

              
        
  return (
    <Container fluid="md">
        <Form.Control className="mt-4"
                placeholder="Type the cryptocurrency name"
                aria-label="currency"
                aria-describedby="basic-addon1" id="x"></Form.Control>
        <Row className="justify-content-center p-4">
            <Col md={2}>
    <Button onClick={fetchData} size="lg" validation="success">Check<FiRefreshCw/> </Button>
            </Col>
            <Col md={10}>
                <ul id="deneme">
                {
                    info.map( (el,index) => (
                        <li key={index}>{JSON.stringify(el.name)} -> {JSON.stringify(el.quote.EUR.price)}</li>
                    ))
                }
                </ul>
            </Col>
        </Row>
        
    </Container>
  )
}

export default App