import React, { useState } from "react";
// import './App.css';
export default function Contacts()
{
    const [Name,setName]=useState("");
    const [gmail,setgmail]=useState("");
    const [subject,setsubject]=useState("");
    const [Message,setMessage]=useState("");
const handlesubmit=async()=>{
    const formdata=JSON.stringify({
        Name:Name,
        email:gmail,
subject:subject,
message:Message,

    
    
    });
    console.log(formdata);
    try{
        const response=await fetch("http://localhost:8000/api/insertcontacts",{
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:formdata,

        })
        if(response.ok){
            alert('Form Submitted')

        }
        else{
            alert('Error')
        }

    }
    catch(error){
        console.log(error)
    }
}


    return (
      <div className="container-fluid">
      <div className="row p-4" id='heading'>
      <div className='col-lg-12 p-5'><h6> Send us a message</h6>
      <h3 className="fs-1 text-success"><span className="text-primary">Contact</span> Us</h3>
      </div>


      <div className="row p-5 " id='formbg'>
          <div className="col-lg-6 ">
          <div className="card mt-3">
              <div className="row p-3">
                  <div className="col-lg-12 p-3">
                     
                  <h2 id='i0'>Address</h2>
                  <p>Bengaluru, Karnataka - 560001,India
                  </p>
              </div>
              </div>
          </div>
          <div className="card mt-3">
                
                <div className="col-lg-12 p-3">
                   
                <h2 id='i0'>Phone</h2>
                <p>+91 8699991120<br></br>+91 9464158200 </p>
            </div>
            
        </div>
        
    
        <div className="card mt-3">
            
                <div className="col-lg-12 p-3">
                   
                <h2 id='i0'>Gmail</h2>
                <p>PrivateTutors@gmail.com.</p>
            </div>
            
        </div>
        </div>
<div className="col-lg-6 mt-3 " color="greenerd">
<form>
    <h2 id='i0'>Get In Touch </h2>
    
    <input type="text" placeholder="Name" className="form-control" value={Name} onChange={(e)=>setName(e.target.value)}></input>
    <br></br>
    
    
    <input type="gmail" placeholder="Gmail" className="form-control" value={gmail} onChange={(e)=>setgmail(e.target.value)}></input>
    
    <br></br>
        <input type="text" placeholder="Subject" className="form-control" value={subject} onChange={(e)=>setsubject(e.target.value)}></input>
        <br></br>
        <textarea placeholder="Message"className="form-control"  rows="10" cols="10" value={Message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
        <br></br>
        <button type= "button" onClick={handlesubmit} className="btn  form-control" id='i0'><big>Submit</big>  </button>
    </form>
</div>
            
            </div>
            
            <div className="row p-1">
                
            
            <h1 className="fs-1 text-success">Location in Bengaluru, Karnataka</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665919023!2d77.46612484328297!3d12.954280237937308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719806594596!5m2!1sen!2sin"
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        

</div>
</div>
</div>

)
}
