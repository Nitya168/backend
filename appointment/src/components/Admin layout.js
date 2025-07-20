import React from "react";
import { Outlet, Link} from "react-router-dom";
export default function Adminlayout(){
    return(<>
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className=" col-lg-2 px-sm-2 px-0 " id="back" >
            <div className="d-flex flex-column align-items-center  px-3 pt-2  min-vh-100 ">
            <a href="#" className="d-flex align-items-center text-dark "   aria-expanded="false"/>
          <img src={require('../images/education.jpg')} alt="hugenerd" width="60" height="60" className="rounded-circle"/>
          <h4 id='font'>Nitya</h4>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start " >
                    <li className="nav-item"  >
                        <a href="/" className="nav-link align-middle px-0 p-3" id="lay">
                        <i class="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/dashboard"  className="nav-link px-0 align-middle p-3" id="lay">
                            <i className="fa-solid fa-gauge" ></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                    </li>
                    <li>
                        <Link to="/enquiries" className="nav-link px-0 align-middle p-3" id="lay">
                            <i className="fa-solid fa-table" ></i> <span className="ms-1 d-none d-sm-inline">Enquiries</span></Link>
                            </li>
                            <li>
                        <Link to="/registerations" className="nav-link px-0 align-middle p-3" id="lay">
                            <i className="fa-solid fa-address-card" ></i> <span className="ms-1 d-none d-sm-inline">Registerations</span></Link>
                            </li>
                            <li>
                        <Link to="/Addblogs" className="nav-link px-0 align-middle p-3" id="lay">
                            <i className="fa-solid fa-blog"></i> <span className="ms-1 d-none d-sm-inline">Addblogs</span></Link>
                            </li>
                            <li>
                        <Link to="/Viewblogs" className="nav-link px-0 align-middle p-3" id="lay">
                            <i className="fa-solid fa-users-viewfinder"></i> <span className="ms-1 d-none d-sm-inline">View Blogs</span></Link>
                            </li>
                           
                            <li>
                        <a href="#" className="nav-link px-0 align-middle" id="lay">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline"></span> </a>
                    </li><hr/>
                    <li className="nav-item"><a className="nav-link" href="/login" id="lay"><i class="fa-solid fa-arrow-right-from-bracket"/>Log Out</a></li>

                  
        
                       
                </ul>
                <hr/>
               
            </div>
        </div>
        <Outlet />
    </div>
</div>
    </>)
}