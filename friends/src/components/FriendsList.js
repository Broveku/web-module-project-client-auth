import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'




function FriendsList(props) {
    const [state, setState]=useState([])
    
    useEffect(()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then((res)=>{
            setState([...state, ...res.data])
        })
        .catch(err =>{
        console.log(err)      
    })
},[])
    
    return(
    <div>
        {state.map((friend)=>{
            return(
                <div>
                    <h2>{friend.name}</h2>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            )
        })}
    </div>)
}

export default FriendsList;