import { useState } from 'react'

import './App.css'

function App() {
 // const [color, setColor] = useState('white')

  const handleClick = (c) =>{
   // setColor(c)
    document.body.style.backgroundColor = c
  }

  return (
    <>
     
      <div>
        <div className = "flex justify-center space-x-4 text-2xl items-space-between bg-gray-500 p-4 rounded-lg">
           <button onClick={() => handleClick('red')} className="bg-red-600 rounded-lg p-2">red</button>
           <button onClick={() => handleClick("yellow")} className="bg-yellow-600 rounded-lg p-2">yellow</button>
           <button onClick={() => handleClick("green")} className="bg-green-600 rounded-lg p-2">green</button>
           <button onClick={() => handleClick("blue")} className="bg-blue-600 rounded-lg p-2">blue</button>
           <button onClick={() => handleClick("orange")} className="bg-orange-600 rounded-lg p-2">orange</button>
        </div>
      </div>
    </>
  )
}

export default App
