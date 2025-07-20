import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className='App'>
      <div className='container-fluid' id="mainbg">
      <div className='row text-white'>

          <div className='col-lg-12'>
            <nav className="navbar navbar-expand-lg navbar-dark ">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">SMARTHEAD</a>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="Featurepage">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Find">Find a tutor</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Bat">Become a tutor</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Contacts">Contacts</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Login">Login</Link>
                    </li>


                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div></div>
        


        <Outlet/>
        <div className='container-fluid '>

<div className='row  text-white' id='catbg' >
<div className='col-lg-4'><h5>Smarthead</h5> Our commitment is to nurture intellects and foster innovation.
Experience education redefined at Smarthead Institute, where every student's potential is realized.</div>
          <div className='col-lg-4 '><h5>Quick links</h5>
            <a href=' 'id="about">About Us</a><br /><a href=''id="about">Our News</a><br /><a href=''id="about">contact us</a><br /><a href=''id="about">Become a tutor</a><br /><a href=''id="about">Portfolio</a>
          </div>
          <div className='col-lg-4'><h5>Our contacts</h5>
            <i class="fa-solid fa-location-dot p-2"></i>Bengaluru, Karnataka - 560001
            India<br />
            <i class="fa-solid fa-message p-2"></i>PrivateTutors@gmail.com<br />
            <i class="fa-solid fa-phone p-2"></i>9464158200
          </div>
        </div>
      </div></div>


  );
}



          