import { useEffect,useState } from "react"
export default function Registeration(){

const [items, setItems]=useState([]);

useEffect(()=>{
    fetch("http://localhost:8000/viewregisteration")
    .then(response=>response.json())
    .then(data=> setItems(data))
    .catch(err => console.error("error fetching data: ",err));
},[]);

    return(<>
    <div className="col py-3">
        <h1>Registeration</h1>
        <table className="table table-bordered text-center" id="table">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
            </tr>
            {items.map(item=>(
                <tr>
                    <td>{item.Name}</td>
                    <td>{item.email}</td>
                    <td>{item.subject}</td>
                    <td>{item.message}</td>
                </tr>
            ))}
 </table>
    </div>
    </>)
}