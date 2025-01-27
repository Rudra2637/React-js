import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value,update]=useState(15)
 
  const addValue = ()=>{
    console.log("clicked");
    let temp = value;
    value ++;
    if(value <= 20)update(value);

    else value = temp;
  }
  const decreaseValue=()=>{
    let temp = value;
    value--;
    if(value >= 0)update(value);
    
    else value=temp;
    
  }
  return (
    <>

      <h2>Counter {value}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
      
    </>
  )
}

export default App
