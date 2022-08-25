import React, { useRef } from 'react'
import {Button} from 'react-bootstrap'

function Contact({myFunction}) {
  {myFunction()}
  const inputRef = useRef()
  const clickHandler = () => {
    console.log(inputRef.current.value)
  }
  return (
    

    <div>
      <h1>Contact</h1>
      <input type="text" ref={inputRef}/>
      <Button onClick={clickHandler}>Get Input Value</Button>
    </div>
    
  )
}

export default Contact