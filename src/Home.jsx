import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un !== null) {
      setUsername(un);
    } else {
      nav("/");
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("un");
    toast.success("Logout Successfully");
    nav("/");
  };
  return (
    <div>
      <center>
        <NavBar />
        <h1>Home Page </h1>
        <br />

        <br />
        <form onSubmit={logout}>
          <div className="input-area">
            <div className="about-card">
              <h2> Welcome {username}</h2>
              <p></p>
            </div>
            <br />
            <div className="input-submit">
              <input type="submit" className="submit" value="Logout!" />
            </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Home;
