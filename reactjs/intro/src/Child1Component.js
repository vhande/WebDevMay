import React, {useContext} from 'react'
// import Database context
import {Database} from './context/index'
import GrandChildComponent from './GrandChildComponent'


function Child1Component() {
    //use useContext to hook to access context
    const [myStr,numbers,myObj,isUserLoggedIn,EventHandler,users] = useContext(Database)
  return (
    <div>
        <h1>Child Component</h1>
        {/* {
            console.log(myStr,numbers,myObj,isUserLoggedIn,users)
            
        }

        {
            EventHandler()
        } */}

        <GrandChildComponent/>
       
    </div>
  )
}

export default Child1Component