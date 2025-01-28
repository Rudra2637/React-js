import React from 'react'

function Compo(props){
    console.log(props.userName)
    console.log(props.check)
    return (
        
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-10">
      <img
        src="https://images.pexels.com/photos/30364135/pexels-photo-30364135/free-photo-of-shadow-of-photographer-and-stray-dog-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {props.userName}
        </span>
        <button>{props.btnText}</button>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
        amet
      </p>
    </div>
    )
}
export default Compo