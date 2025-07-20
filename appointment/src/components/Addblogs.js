import { useEffect, useState } from "react"

export default function Addblogs()
{
   const [title, settitle]= useState("");
   const [description, setdescription]= useState("");
   const [pic, setpic]= useState("");
   const [poston, setposton]= useState("");
   const [postby, setpostby]= useState("Admin");
   const [picurl,setpicurl]=useState("");
    
useEffect(()=>{
    handleupload(pic);
},[pic]);

const handlepicture=(e)=>{
    setpic(e.target.files[0]);
}

const handleupload=(pic)=>{
    const data= new FormData();
    data.append('file',pic);
    data.append('upload_preset','tutorpreset');
    data.append('cloud_name','dhydsgjhz')
    fetch("https://api.cloudinary.com/v1_1/dvq9yleg8/image/upload",
        {
          method:'post', body:data
        })
        .then(res=>res.json())
        .then(data=>{setpicurl(data.url); })
}

const handlesubmit=async()=>{
    const formdata=JSON.stringify({
      title:title,
      description:description,
      pic:picurl,
      poston:poston,
      postby:postby
      
    });
    console.log(formdata);
    try{
      const response=await fetch("http://localhost:8000/api/insertblog",{
      headers:{'Content-type':'application/json'},
      method:'POST',
      body:formdata,
    }
      )
  
  if(response.ok){
    alert('Blog submitted')
  }
  else{
    alert('Error')
  }
  }
  catch(error)
  {
    console.log(error)
  }
  }


    return(
       
        <div class="col-lg-10">
            <h1>Add Blogs</h1>
            <form>
          
              <label >Title</label>
            <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)} />
            <label >Description</label>
            <textarea className="form-control" rows="3" placeholder="Write here" value={description} onChange={(e)=>setdescription(e.target.value)}>{description}</textarea>
         
          
              <label >Picture</label>
              <input type="file" className="form-control"placeholder="upload picture" onChange={handlepicture}/>
           
          
              <label >Post on </label>
              <input type="date"class="form-control" placeholder="date/" value={poston} onChange={(e)=>setposton(e.target.value)}>
              </input>
            
         
              <label >Post by </label>
              <input type="text"class="form-control" placeholder="Admin" value={postby} onChange={(e)=>setpostby(e.target.value)}>
              </input>
            
          
              <button className="sharp button btn btn-success rounded-pill px-4 py-2" onClick={handlesubmit}  >Submit</button>
            
            </form>

        </div>
    
    )
}




{/*import { useEffect, useState } from "react"

export default function Addblogs()
{
   const [title, settitle]= useState("");
   const [description, setdescription]= useState("");
   const [pic, setpic]= useState("");
   const [poston, setposton]= useState("");
   const [postby, setpostby]= useState("Admin");
   const [picurl,setpicurl]=useState("");
    
useEffect(()=>{
    handleupload(pic);
},[pic]);

const handlepicture=(e)=>{
    setpic(e.target.files[0]);
}

const handleupload=(pic)=>{
    const data= new FormData();
    data.append('file',pic);
    data.append('upload_preset','tutorpreset');
    data.append('cloud_name','dhydsgjhz')
    fetch("https://api.cloudinary.com/v1_1/dvq9yleg8/image/upload",
        {
          method:'post', body:data
        })
        .then(res=>res.json())
        .then(data=>{setpicurl(data.url); })
      }
      
      const handlesubmit=async()=>{
          const formdata=JSON.stringify({
            title:title,
            description:description,
            pic:picurl,
            poston:poston,
            postby:postby
            
          });
          console.log(formdata);
          try{
            const response=await fetch("http://localhost:8000/api/insertblog",{
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:formdata,
          }
            )
        
        if(response.ok){
          alert('Blog submitted')
        }
        else{
          alert('Error')
        }
        }
        catch(error)
        {
          console.log(error)
        }
        }
      
      
        return(
         <div className="row px-5">
        <div class="col py-5">
              <h1>Add Blogs</h1></div>
              <form>
            <div className="row">
              <div className="col-md-6 p-5">
                <label><h3>Title</h3></label>
                
              <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)} />
              </div>
              </div>
            <div className="row">
            <div className="col-md-6 p-5">
              <label><h3>Description</h3></label>
              <textarea className="form-control" rows="7" placeholder="Write here" value={description} onChange={(e)=>setdescription(e.target.value)}>{description}</textarea>
            </div>
            </div>
            
            <div className="row">
              <div className="col-lg-6 p-5">
                <label><h3>Picture</h3></label>
                <input type="file" className="form-control"placeholder="upload picture" onChange={handlepicture}/>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 p-5">
                <label><h3>Post on</h3> </label>
                <input type="date"class="form-control" placeholder="date/" value={poston} onChange={(e)=>setposton(e.target.value)}>
                </input>
              </div>
            </div>
  
            <div className="row">
              <div className="col-lg-6 p-5">
                <label><h3>Post by </h3></label>
              <input type="text"class="form-control" placeholder="" value={postby} onChange={(e)=>setpostby(e.target.value)}>
              </input>
            </div> 
          </div>
           
          <div className="row text-center">
            <div className="col-lg-6">
              <button className="sharp button btn btn-success rounded-pill px-4 py-2" onClick={handlesubmit} >Submit</button>
            </div>
          </div>
            </form>

        </div>
       
    
    )
}      */}