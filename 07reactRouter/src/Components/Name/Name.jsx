import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function Name(){
    const {userid} = useParams()
     const url = `https://api.github.com/users/${userid}`
        const [userdata,setData]=useState("")
        useEffect(()=>{
            async function fetchData(){
                try{
                    const response = await fetch(url);
                    if(!response.ok)throw new Error("Error 404")
                    const data = await response.json()
                    setData(data)
                    console.log(data)
                }
                catch(error){
                    console.log("error");
                }
            }
            fetchData();
        },[url])
        
        
        return (
            <div className="text-center m-4 bg-gray-600 text-white
            p-4 text-3xl">Github Followers : {userdata.followers}
            <img src={userdata.avatar_url} width={300}/>
                {/* <h1>{userdata.name}</h1>
                <img src={userdata.avatar_url} />
                <h2>{userdata.bio}</h2> */}
            </div>
        
        )
}