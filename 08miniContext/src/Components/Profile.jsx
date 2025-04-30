import React , {useContext} from 'react'
import UserContext from "../Context/userContext"

export default function Profile(){
    const {user} = useContext(UserContext);
   
    if(!user)return <div>Please log in</div>

    else return <div>Welcome {user.user}</div>
        
}