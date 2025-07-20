import React,{useState} from "react";
// import './App.css';
export default function Bat()
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
        const response=await fetch("http://localhost:8000/api/insertregister",{
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


    return(
      <>
        <div className="container">
        <div className='row'>
          <div className='col-lg-12 p-5'><h6> Tutor with the best</h6></div>
            <h3 className="fs-1 text-success"><span className="text-primary">Become a</span> Tutor</h3>
            <div className='col-lg-6'>Private tutoring is not always effective in raising academic achievement; and in some schools students commonly skip classes or sleep through lessons because they are tired after excessive external study. This means that the shadow system can make regular schooling less efficient.

Teachers who spend more time focusing on private lessons than regular classes can cause greater inefficiencies in the mainstream school system. Situations in which teachers provide extra private lessons for pupils for whom they are already responsible in the public system can lead to corruption.
</div>
<div className='col-lg-6'><h4>Skill Requirements</h4>
<ul>
<li>Knowledge of subject matter</li>
<li>Ability to effectively communicate subject matter</li>
<li>Application of different learning strategies including active learning and peer-to-peer techniques</li>
<li>Ability to listen and answer questions during tutoring sessions</li>
<li>Set goals and/or expectations during the first few sessions</li>
</ul>

</div>

</div>



{/*<div className='row'>
<form >
    <h2 id='i0'>Registration info </h2>
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
            </div>*/}
            
  
 

         
        <div className="container">
        <div className='row'>
          <div className='col-lg-12 p-5'><h6>Find the perfect tutoring job</h6>
            <h3 className="fs-1 text-success"><span className="text-primary">Apply</span> Now</h3>
          </div>
        </div>
        
            <div className="row" id="tutorbg" >
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body p-5'>
                <h1 className="display-1"><span className="text-primary">Calling </span></h1>
                <h3 className="fs-1 text-success"><span className="text-primary"></span>All Experts </h3>
                <div className='card-text'>When private tutoring is provided by well trained tutor however the effects can be dramatic, with pupils improving performance by two standard deviations. The system of excessive private tutoring will take time for activities such as playing soccer or joining clubs from students.
                </div>
               
</div>
</div>
        </div>
        </div>
        <div className='row p-5'>
<form id="formbg" >
    <h2 className='fs-2 text-primary' id='i0' >Registration info </h2>
            <input type="text" placeholder="Name" className="form-control" value={Name} onChange={(e)=>setName(e.target.value)}></input>
    <br></br>
    
    
    <input type="gmail" placeholder="Gmail" className="form-control" value={gmail} onChange={(e)=>setgmail(e.target.value)}></input>
    
    <br></br>
        <input type="text" placeholder="Subject" className="form-control" value={subject} onChange={(e)=>setsubject(e.target.value)}></input>
        <br></br>
        <textarea placeholder="Message"className="form-control"  rows="10" cols="10" value={Message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
        <br></br>
        <button type= "button" onClick={handlesubmit} className="form-control" id='i0'><big>Submit</big>  </button>
    </form>
</div>
            
            </div>
           
        <div className="row text-white pt-5 mt-5 text-center p-5" id="satbg">
          <div className="col">
            <p>Call Us 800-123-4567</p>
            <h1 className="display-1">Questions about Hiring</h1>
            <p>Our staff can help you with the process of becoming a tutor</p>

            <button className="btn btn-success rounded-pill px-4 py-2" id="btnbg">SET AN INTERVIEW</button>
          </div>
        </div>
        </div>
        <div className="container-fluid">
  <div className='row '>
    <div className='col-lg-12 p-5'><h3 className="fs-1 text-success"><span className="text-primary">Latest</span> News</h3>
    </div>
    </div>
    
    <div className='row '>
    <div className='col-lg-4 text-center'>
  <div className='card'>
    <div className='card-body'>
      <img src={require('../images/download.jpeg')} width='100%' height='350'/></div>
      <p className='card-text'><h5>Back to scool:Tutoring as a proactive Tool</h5></p></div>
      </div>
      <div className='col-lg-4 text-center'>
  <div className='card'>
    <div className='card-body'>
      <img src={require('../images/hero_blog_Student-Wellness_Homework_photo_iStock_878931780_monkeybusinessimages.webp')}width='100%' height='350'/>
      </div>
      <p className='card-text'><h5>10 tips How to find your ideal tutor</h5></p>
     </div>
     </div>
    
     <div className='col-lg-4 text-ceter'>
            <div className='card' >
              <div className='card-body'>
              <img src={require('../images/technology.jpeg')}width='100%' height='350'/>  
          </div>
          <p className='card-text '> <h5>Embracing Technology for Enhanced Learning</h5></p>
          
      </div>
        </div>
     </div>
     </div>
    
     
  


     
      </>  

    )
}