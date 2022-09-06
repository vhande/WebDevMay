import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import { useState } from 'react';
import { Database } from './context/index'
import Child1Component from './Child1Component';


function App() {
  // const [number,setNumber] = useState(1)
  // function handleClick() {
  //   setNumber(number+1)
  //   console.log('Click Event', number) }

  const myStr = "Helllo world"
  const numbers = [1, 2, 3, 4, 5]
  const myObj = "John Doe"
  const isUserLoggedIn = true
  const EventHandler = () => {
    console.log('button clicked')
  }

  const users = [
    {
      id: 1,
      name: "John Doe"
    },
    {
      id: 2,
      name: "Jane Doe"
    }
  ]

  const [count, setCount] = useState(0);

  return (

    <Database.Provider value={[myStr, numbers, myObj, isUserLoggedIn, EventHandler, users, setCount, count]}>
      <div className="container-fluid bg-dark text-light p-4">

        <h1>App.js</h1>
        <Child1Component />

      </div>
    </Database.Provider>

    /*      
            <ChildComponent name="Coffee"/>
            {
              //click event in react component
            }
    
          {number}
          <button onClick={handleClick}>Don't click</button>*/



  );

}
export default App;
