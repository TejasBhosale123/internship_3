import {useState,useRef} from "react";
import emailjs from "@emailjs/browser";
import NavBar from './NavBar';

function Doubt(){
    const rName=useRef();
     const rDoubt=useRef();
    const[name,setName]=useState("");
    const[doubt,setDoubt]=useState("");
    const[msg,setMsg]=useState("");

    const hName=(event)=>{setName(event.target.value);}
    const hDoubt=(event)=>{setDoubt(event.target.value);}

    const sm = (e) => {
        e.preventDefault();
        if (name === "") {
          alert("Please Enter The Name");
          setMsg("");
          rName.current.focus();
    return;
        }
    
        if (doubt === "") {
          alert("Please Enter The Doubt");
          setMsg("");
          rDoubt.current.focus();
        }
    
        let data = { name,  doubt };
    
        emailjs
          .send("service_4837", "template_4835", data, "xEXkXH4ZTFi_6lEGC")
          .then(res =>{
            setMsg("Message Send Successfully");
            setName("");
 
            setDoubt("");
            rName.current.focus();
          })
          .catch((err) => {
            setMsg("Something Went Wrong", +err);
          });
      };
    
      return (
        <div>
        <NavBar />
        <div className="doubt-container">
          <h1>Ask Your Doubt</h1>
  
          <form onSubmit={sm}>
            <input
              type="text"
              placeholder="Enter Your Name"
              ref={rName}
              onChange={hName}
              value={name}
              required
            />
            <textarea
              rows={10}
              cols={50}
              placeholder="Ask Your Doubt"
              ref={rDoubt}
              onChange={hDoubt}
              value={doubt}
              required
            />
            <button type="submit">Ask Your Doubt</button>
          </form>
          <br/>
          <h2>{msg}</h2>
        </div>
      </div>
       
      );
    };
    
    export default Doubt;