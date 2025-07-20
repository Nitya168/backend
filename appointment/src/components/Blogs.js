import { useEffect,useState } from "react";
import {Link} from "react-router-dom";

export default function Blogs(){

const [items, setItems]=useState([]);

useEffect(()=>{
    fetch("http://localhost:8000/Viewblogs")
    .then(response=>response.json())
    .then(data=> setItems(data))
    .catch(err => console.error("error fetching data: ",err));
},[]);

    return(<>
    <div className="container">
    <div className="row">
    <div className="col px-5 py-3 " ></div>
        <h1 id="bb">Blogs</h1>
        <div className="col-lg-9  py-5 px-3 ">
            {items.map(item=>(<>
                
                
                    <h4>{item.title}</h4>
                    <p>{item.description.subscript}
                    <Link to={`/blogdetail/${item._id}`}><button className="btn btn-success">Read More</button></Link></p>
                    <img src={item.pic} height="200" width="200"/>
                    <p> By {item.postby} on {item.poston}</p>
                    
            </>
               
            ))}
             </div>
             {/*<div className="col-lg-6 px-3 ">
             <div className='card p-5'>
              <div className='card-body p-5'>
                
                <h3 className='card-title text-success'><b>Categories</b></h3>
               
                 
                    <p className='card-text p-5'><h6>Distance Learning</h6><br /> <h6>Lesson Planning</h6><br /><h6> Online Tutoring</h6><br /><h6> Resources</h6><br /><h6>Tutoring</h6>
                  </p>
                 
                
              </div>
              
             
              <div className='card-body p-5'>
                
                <h3 className='card-title text-success'><b>Recent Posts</b></h3>
               
                 
                    <p className='card-text p-5'>  <img src={require('../images/rp.jpg')} width='80%' height='350'/></p>
                    <h6>The future of the tutor association</h6> <br/> <h6>Your choice of Learning at Home</h6>
                 
                
              </div>
              <div className='card-body p-5'>
                
                <h3 className='card-title text-success'><b>Blockquotes:</b></h3>
               
                 
                    <p className='card-text p-5'><h5>"Education is the most powerful weapon which you can use to change the world."</h5>
                    — Nelson Mandela<br /> <br/><br/><h5>"The journey of a thousand miles begins with one step."</h5>
                    — Lao Tzu<br /> <br/><br/><h5>"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</h5>
                    — Dr. Seuss<br/> <br/><br/><h5>"Teaching is not a lost art, but the regard for it is a lost tradition."</h5>
                    — Jacques Barzun<br/> <br/><br/><h5>"It does not matter how slowly you go as long as you do not stop."</h5>
                    — Confucius
                  </p>
              </div>


             
             


            </div>
             </div>*/}
             </div>
           </div>

    </>)
}