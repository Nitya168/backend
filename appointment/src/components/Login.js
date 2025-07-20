//import React from"react";
import React,{useState} from "react";
export default function Login()
    {
        const [Name,setName]=useState("");
          const [PASSWORD,setPASSWORD]=useState("");
          
      const handlesubmit=async()=>{
        if(Name==="admin" && PASSWORD=="123")
        {
            window.location.href="/Dashboard";
        }
        else{
            alert("Invalid Username or Password");
        }
    }

         
    return(
      <>
      <div className="row justify-content text-center p-5"id="mjabg">
       
        <form id="backbg">
        <h3><b>Login</b></h3>
            <input type="text" placeholder="USERNAME" className="form-control" value={Name} onChange={(e)=>setName(e.target.value)}></input>
    <br></br>
    
    
    <input type="text" placeholder="PASSWORD" className="form-control" value={PASSWORD} onChange={(e)=>setPASSWORD(e.target.value)}></input>
    
    <br></br>
       
        <button type= "button" onClick={handlesubmit} className="form-control" id='buttonbg'><big>Submit</big>  </button>
    </form>
    </div>
       
      </>  
    )
}