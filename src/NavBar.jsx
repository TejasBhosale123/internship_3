import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'

const NavBar = () => {

    const[username,setUsername] = useState(null);

    useEffect(() => {
        let un = localStorage.getItem("un");
        if(un!==null){
            setUsername(un);
        }
    }, [])
  return (
    <div className='navbar'>

    
    <div className='nav'>
        {(username === null ) && (<Link to= '/'>Login</Link>)}
        {(username === null ) && (<Link to= '/signup'>Sign Up</Link>)}
        {(username === null ) && (<Link to= '/forget'>Forgot Password</Link>)}


        {(username !== null ) && (<Link to= '/home'>Home</Link>)}
        {(username !== null ) && (<Link to= '/about'>About</Link>)}
        {(username !== null ) && (<Link to= '/change'>Change Password</Link>)}
        {(username !== null ) && (<Link to= '/doubt'>Doubt</Link>)}


    </div>
    </div>
  )
}

export default NavBar