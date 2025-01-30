import React, { useRef } from 'react'
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import app from './firebase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Forget = () => {
  const nav = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if(un !== null){
      nav("/home");
    }
  }, [])

  const rusername = useRef();

  const [username,setusername] = useState('');
  const [msg,setMsg] = useState('');

  const hUsername = (e)=>{
    setusername(e.target.value);
  }
  
  const save = (e) =>{
    e.preventDefault();

    const auth = getAuth(app);
    sendPasswordResetEmail(auth, username)
    .then((res) => {
      nav('/');
    })
    .catch((err) => { 
      setMsg("issue" + err);
    })
  }
  return (
    <div>
        
        <center>
        <NavBar/>
            <form onSubmit={save}>
            <h1> Forgot Password Page </h1>
            <br/>
              <div className='input-area'>
                <input type="email"  className='input-field' placeholder='Enter Your Email To Reset' onChange={hUsername} ref={rusername} value={username}/>
                <br/><br/>
                <div className='input-submit'>
                        <input type='submit' className='submit' value='Reset Password!' />
                </div>
              </div>
            </form>
            <h2>{msg}</h2>
        </center>
    </div>
  )
}

export default Forget