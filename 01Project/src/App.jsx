import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#212121")
  document.body.style.backgroundColor = color;
  return (
    <>
      <div className="flex flex-wrap p-4 justify-center space-x-2 rounded-2xl m-4">
            <button onClick={()=> setColor("red")} className="bg-red-500 text-white px-4 py-2 rounded">red</button>
            <button onClick={()=> setColor("green")} className="bg-green-500 text-white px-4 py-2 rounded">green</button>
            <button onClick={()=> setColor("blue")} className="bg-blue-500 text-white px-4 py-2 rounded">blue</button>
            <button onClick={()=> setColor("violet")} className="bg-violet-500 text-white px-4 py-2 rounded">violet</button>
            <button onClick={()=> setColor("grey")} className="bg-gray-500 text-white px-4 py-2 rounded">grey</button>
            <button onClick={()=> setColor("pink")} className="bg-pink-500 text-white px-4 py-2 rounded">pink</button>
            <button onClick={()=> setColor("yellow")} className="bg-yellow-500 text-white px-4 py-2 rounded">yellow</button>
            <button onClick={()=> setColor("purple")} className="bg-purple-500 text-white px-4 py-2 rounded">purple</button>
            <button onClick={()=> setColor("white")} className="bg-white text-black px-4 py-2 rounded">white</button>
            <button onClick={()=> setColor("black")} className="bg-black text-white px-4 py-2 rounded">black</button>
      </div>
    </>
  )
}

export default App
