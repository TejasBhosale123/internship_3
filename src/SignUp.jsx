import React, { useRef, useState, useEffect } from "react";
import app from "./firebase";
import {
  createUserWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SignUp = () => {
  const nav = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un !== null) {
      toast.success("Account Created Successfully");
      nav("/home");
    }
  }, []);

  const rEmail = useRef();
  const rPass = useRef();
  const rCPass = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const hEmail = (e) => {
    setEmail(e.target.value);
  };

  const hPass = (e) => {
    setPassword(e.target.value);
  };

  const hCPass = (e) => {
    setCPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || cpassword === "") {
      toast.warning("Enter Email and Password");
    } else if (password !== cpassword) {
      toast.warning("Enter Correct Password");
    } else {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          toast.success("Account Created Successfully. Please log in.");
          nav("/");  
        })
        .catch((err) => toast.error(err.message));
    }
  };
  

  return (
    <div>
      <center>
        <NavBar />

        <br />
        <div className="login">
          <h1>Sign Up Page</h1>
          <br />
          <form onSubmit={login}>
            <div className="input-area">
              <input
                type="email"
                className="input-field"
                placeholder="Enter Your Email"
                onChange={hEmail}
                ref={rEmail}
                value={email}
              />
            </div>
            <br />
            <div className="input-area">
              <input
                type="password"
                className="input-field"
                placeholder="Enter Your Password"
                onChange={hPass}
                ref={rPass}
                value={password}
              />
            </div>
            <br />
            <div className="input-area">
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Your Password"
                onChange={hCPass}
                ref={rCPass}
                value={cpassword}
              />
            </div>
            <br />
            <div className="input-submit">
              <input type="submit" className="submit" value="Sign Up!" />
            </div>
          </form>
        </div>
        <ToastContainer />
      </center>
    </div>
  );
};

export default SignUp;
