import React, { useRef, useState, useEffect } from "react";
import app from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const nav = useNavigate();

  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un !== null) {
      toast.success("Login Successfully");
      nav("/home");
    }
  }, []);

  const rEmail = useRef();
  const rPass = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hEmail = (e) => {
    setEmail(e.target.value);
  };

  const hPass = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.warning("Enter Email and Password");
    }
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem("un", email);
        toast.success("Login Successfully");
        nav("/home");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <center>
        <ToastContainer />
        <NavBar />

        <br />
        <div className="login">
          <h1>Login Page</h1>
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
            <div className="input-submit">
              <input type="submit" className="submit" value="Login" />
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Login;