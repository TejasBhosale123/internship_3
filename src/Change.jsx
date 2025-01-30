import NavBar from "./NavBar";
import { useState, useEffect, useRef } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Change() {
  const nav = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un === null) nav("/");
  }, []);
  const rPassword1 = useRef();
  const rPassword2 = useRef();

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState("");
  const hPassword1 = (event) => {
    setPassword1(event.target.value);
  };
  const hPassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    if (password1 === password2) {
      const auth = getAuth();

      const user = auth.currentUser;
      updatePassword(user, password1)
        .then((res) => {
          localStorage.removeItem("un");
          nav("/");
        })
        .catch((err) => {
          setMsg("issue" + err);
        });
    } else {
      setMsg("passwords did not match");
      setPassword1("");
      setPassword2("");
      rPassword1.current.focus();
    }
  };

  return (
    <div>
      <center>
        <NavBar />
        <h1> Change Password Page</h1>
        <br/>
        <form onSubmit={save}>
          <div className="input-area">
          <input
            className='input-field'
            type="password"
            placeholder="Enter New Password"
            ref={rPassword1}
            onChange={hPassword1}
            value={password1}
          />
          <br />
          <br />
          <input
            className='input-field'
            type="password"
            placeholder="Confirm New Password"
            ref={rPassword2}
            onChange={hPassword2}
            value={password2}
          />
          <br />
          <br />
          <div className='input-submit'>
                        <input type='submit' className='submit' value='Change Password!' />
                    </div>
          </div>
        </form>
        <h2>{msg}</h2>
      </center>
    </div>
  );
}
export default Change;
