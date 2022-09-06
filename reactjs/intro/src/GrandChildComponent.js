import React, {useContext} from 'react'
import {Database} from './context/index'
import {Button} from 'react-bootstrap'

function GrandChildComponent() {
    const [myStr, numbers, myObj, isUserLoggedIn, EventHandler, users, setCount, count] = useContext(Database)
  return (
    <div>GrandChildComponent

        {
            console.log("Grandchildyay", myStr,numbers,myObj,isUserLoggedIn,users)
            
        }
       <h1>{count}</h1>

        {
            EventHandler()
        } 

        <Button onClick={() => {setCount(count+1)}}>Increase</Button>
        <Button onClick={() => {setCount(count-1)}}>Decrease</Button>
    </div>
  )
}

export default GrandChildComponent