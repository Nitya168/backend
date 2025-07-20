import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Blogdetail()
{
    let {id}=useParams();
  console.log(id);

    const [items, setItems]=useState([]);
    const formdata=JSON.stringify({
        id:id,
      });
      console.log(formdata);
    useEffect(()=>{
        fetch('http://localhost:8000/viewblogbyid',{
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:formdata,
            }) 
        .then(response=>response.json())
        .then(data=> setItems(data))
        .catch(err => console.error("error fetching data: ",err));
    },[]);

    return(
       
        <div class="row">
            <h1 id="bb">Blog Detail</h1>
            

{items.map(item=>(
    <div className="col-lg-8 p-5">
        <h4>{item.title}</h4>
        
        <img src={item.pic} height={400} width="50%" />
        <p>By {item.postby} on {item.poston}    </p>
        <p>{item.description.substring(0,300)}</p>
        </div>
        
   
    ))}
    
    
                
            </div>
        
        )
    }