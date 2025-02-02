import React from 'react';

function Navbar() {
    const btn = (event)=>{
        let hold=document.querySelector('body');
        let btn=event.target;
        hold.style.backgroundColor=btn.innerHTML;
    }
    return (

        <div className="flex flex-wrap bg-green-600 p-4 justify-center space-x-2 rounded-2xl m-4 ">
            <button onClick={btn} className="bg-red-500 text-white px-4 py-2 rounded">red</button>
            <button onClcik={btn} className="bg-green-500 text-white px-4 py-2 rounded">green</button>
            <button onClick={btn} className="bg-blue-500 text-white px-4 py-2 rounded">blue</button>
            <button onClick={btn} className="bg-violet-800 text-white px-4 py-2 rounded">violet</button>
            <button onClick={btn} className="bg-gray-500 text-white px-4 py-2 rounded">gray</button>
            <button onClick={btn} className="bg-pink-500 text-white px-4 py-2 rounded">pink</button>
            <button onClick={btn} className="bg-yellow-500 text-white px-4 py-2 rounded">yellow</button>
            <button onClick={btn} className="bg-purple-500 text-white px-4 py-2 rounded">purple</button>
            <button onClick={btn} className="bg-white text-black px-4 py-2 rounded border">white</button>
            <button onClick={btn} className="bg-black text-white px-4 py-2 rounded">black</button>
        </div>
        
    );
}

export default Navbar;
