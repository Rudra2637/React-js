import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compo from './components/compo.jsx'

function App() {
  const [count, setCount] = useState(0)
  let obj ={
    name:"rudra",
    age:20
  }
  return (
    <>
      <h1 className="bg-green-300 text-black font-bold p-10
      rounded-2xl
      ">Tailwindcss</h1>
      <Compo userName="rudra" btnText="Press Me" />
      <Compo userName="Pro Coder" btnText="Click Me"/>
    </>
  )
}

export default App
