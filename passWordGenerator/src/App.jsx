import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber] = useState(false)
  const [specialAllowed,setSpecial] = useState(false)
  const [passWord,setPassword] = useState("")

  const ref = useRef(null)

  const passWordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+="1234567890"
    if(specialAllowed) str+="!@#$%^&*()_+{}|:<>?[]\;',./"

    for(let i=0;i<length;i++){
      let random = Math.floor(Math.random()*str.length)
      pass += str[random]
    }
    setPassword(pass)

  },[length,numberAllowed,specialAllowed,setPassword])

  const copytoClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(passWord);
    ref.current?.select()
  },[passWord])
  
  useEffect(()=>{
    passWordGenerator()
  },[length,numberAllowed,specialAllowed,passWordGenerator])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500
     bg-gray-700">
      <h1 className="text-white text-center my-3">PassWord Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={passWord}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref = {ref}
          />
          <button onClick={copytoClipboard}
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"  >
              Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>setLength(e.target.value)}
            />
            <label>length:{length}</label>
          </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={specialAllowed}
              id="characterInput"
              onChange={() => {
                  setSpecial((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
          
      </div>
     
        
     </div>
    </>
  )
}

export default App
