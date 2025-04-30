import React from 'react'
import UserContext from '../Context/userContext'
import {useState,useContext} from 'react'

export default function Login(){
    const [user,setUserName] = useState("");
    const [pass,setPass] = useState("");

    const {setUser} = useContext(UserContext);

    const handleClick = (e)=>{
        e.preventDefault();
        setUser({user,pass});
    }

    return(
        <div>
            <h2>Login</h2>
            <input
             value={user}
             type ="text" 
             placeholder = "username"
             onChange = {(e)=>setUserName(e.target.value)}
             />
             {" "}
            <input
                value = {pass} 
                type = "text" 
                placeholder = "password"
                onChange={(e)=>setPass(e.target.value)}
            />
            <button onClick = {handleClick}>Submit</button>
        </div>
    )
}