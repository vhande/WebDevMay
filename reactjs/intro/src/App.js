import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import { useState } from 'react';


function App() {
  const [number,setNumber] = useState(1)
  function handleClick() {
    setNumber(number+1)
    console.log('Click Event', number) }
  return (
    <div className="App">
     
        <ChildComponent name="Coffee"/>
        {
          //click event in react component
        }

      {number}
      <button onClick={handleClick}>Don't click</button>
     
        
    </div>
  );
      
      }
export default App;
