import { useEffect,useState } from "react"
export default function Viewblogs(){

const [items, setItems]=useState([]);

useEffect(()=>{
    fetch("http://localhost:8000/viewblogs")
    .then(response=>response.json())
    .then(data=> setItems(data))
    .catch(err => console.error("error fetching data: ",err));
},[]);


const deleteblog=async (id)=>{
    const formdata=JSON.stringify({
        id:id
    });
    try{
        const response=await fetch("http://localhost:8000/api/deleteblogbyid",{
        headers:{'Content-type':'application/json'},
        method:'POST',
        body:formdata,
      }
        )
    
    if(response.ok){
      alert('Blog deleted')
      setTimeout(()=>{
        window.location.reload();
          },1000);
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

    return(<>
    <div className="col py-3">
        <h1>View Blogs</h1>
        <table className="table table-responsive table-bordered text-center" id="table" >
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Pic</th>
                <th>Post On</th>
                <th>PostBy</th>
                <th>Action</th>
            </tr>
            {items.map(item=>(
                <tr>
                    <td>{item.title}</td>
                    <td>{item.description.substring(0,110)}</td>
                    <td><img src={item.pic} height="200" width="200"/></td>
                    <td>{item.poston}</td>
                    <td>{item.postby}</td>
                    <td><button className="btn btn-danger" onClick={()=>deleteblog(item._id)}><i className="fa-solid fa-trash"></i></button></td>

                </tr>
            ))}
 </table>
    </div>
    </>)
}