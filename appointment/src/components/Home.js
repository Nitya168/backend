
import React from "react";
import { Link } from "react-router-dom";
export default function Home()
{
  return(
    <>
    
    <div className='container-fluid' id="mainbg">
    <div className="row text-white pt-5 mt-5 text-center">
  <div className="col">
 
          
    <h2>Personal and Online Tutor</h2>
    <h1 className="display-1">Find Private Tutor</h1>
    <Link to="/Find/"> <button className="btn btn-success rounded-pill px-4 py-2">Find Tutor Now</button></Link>
  </div>
</div>
</div>



      

<div className="container">
  <div className='row'>
  <div className='col-lg-12 p-5'><h6>We provide the best tutoring service</h6>
  <h3 className="fs-1 text-success"><span className="text-primary">Useful</span> Information</h3>
  </div>
</div>
<div className="row mb-5" id="aboutbg">
  <div className='col-lg-6'>
<div className='card'>
    <div className='card-body p-5'>
      <h1>Most Popular</h1>
      <h3 className='card-title text-success'><b>Trending subjects</b></h3>
      <div className="row py-5">
      <div className="col-lg-6">
      <p className='card-text'>Mathematics<br/> Creative Writing<br/> English<br/> Accounting<br/> Coding<br/> Spanish<br/> 
      </p>
      </div>
      <div className="col-lg-6"><p>
      Communication<br/>Business Studies<br/>Chemistry<br/>Engineering<br/> Architecture<br/> Marketing</p></div>
      </div>
      </div>
</div></div>

</div>
   </div>
   
   
   <div className="container-fluid">
  <div className="row" id="catbg">
  <div className='col-lg-12 p-5'>
    <p>All tutors are guaranteed by us</p>
  <h3 className="fs-1 text-success"><span className="text-primary">100%</span>Guarantee</h3>
  </div>
  
<div className='col-lg-4'><h5>Professional Tutors</h5>
Our approach is personalized, focusing on understanding your unique learning style and academic goals. Through targeted lessons, our aim is not only to improve your performance but also to foster a deep comprehension of the material. I provide clear explanations, effective study strategies, and continuous feedback to ensure your progress. Together, we'll build confidence and mastery inall subjects, preparing you for success academically and beyond."



</div>
  <div className='col-lg-4'><h5>Real Results Only</h5>
  At SmartHead, we're dedicated to delivering real results in education. Our proven approach combines experienced educators with personalized learning plans tailored to each student's needs. Whether it's improving grades, mastering challenging subjects, or preparing for exams, we focus on fostering deep understanding and long-term academic success. With flexible scheduling and a commitment to excellence, we empower students to achieve their goals and thrive in their educational journey. Join us at SmartHead and experience the difference firsthand</div>
  <div className='col-lg-4'><h5>University Approved</h5>
  Choose SmartHead, your trusted partner in education, approved by esteemed universities. Our institute upholds rigorous standards and employs qualified educators who specialize in a variety of disciplines. With a focus on academic excellence and student success, we offer personalized tutoring services that cater to diverse learning needs. Whether you're seeking assistance with coursework, exam preparation, or skill enhancement, our university-approved programs ensure quality and reliability. Join us at SmartHead and take your academic journey to new heights</div>
  </div> </div>
  <div className='container-fluid'>
  <div className='row'>
  <div className='col-lg-12 p-5'><h6>Find the right tutor for you</h6>
  <h3 className="fs-1 text-success"><span className="text-primary">Featured</span>Tutors</h3>
  </div>
  </div>

  <div class="container mt-40" id='cards01'>
            
            <div class="row mt-30">
                <div class="col-md-4 col-sm-6">
  
                    <div class="box5">
                        <img class="pic-1" src={require('../images/shalini Rathore.jpg')}  alt="specific size image" />
                        <ul class="icon">
                            <a href="#" class="fa fa-search"></a>


                           <a href="#" class="fa fa-link"></a>
                        </ul>
                        <div class="box-content">
                            <h3 class="title">Shalini Rathore</h3>
                            <span class="post">Chemistry Coding Communication</span>
                        </div>
                    </div>
                </div>
            
            <div class="col-md-4 col-sm-6">
  
                    <div class="box5">
                        <img class="pic-1" src={require('../images/shradha sharma.jpg')}  alt="specific size image" />
                        <ul class="icon">
                           <a href="#" class="fa fa-search"></a>


                            <a href="#" class="fa fa-link"></a>
                        </ul>
                        <div class="box-content">
                            <h3 class="title">Shradha Sharma</h3>
                            <span class="post">Architecture Spanish World History</span>
                        </div>
                    </div>
                </div>
           
            <div class="col-md-4 col-sm-6">
  
                    <div class="box5">
                        <img class="pic-1" src={require('../images/uday kotak.jpg' )}/>
                        <ul class="icon">
                            <a href="#" class="fa fa-search"></a>


                            <a href="#" class="fa fa-link"></a>
                        </ul>
                        <div class="box-content">
                            <h3 class="title">Uday Kotak</h3>
                            <span class="post">English Marketing Mathematics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
 
 
     <div className='row'>
      <div className='col-lg-9 p-5'><h3 className="fs-1 text-success"><span className="text-primary">Want to become a tutor in</span> SmartHead!</h3>
     
      <p>Smarthead collaborates professional and talenteed tutors from all over the world! Join us right now</p>
      </div>
      <div className="col-lg-3 p-5">
      <Link to="/Bat/">< button className='btn btn-success rounded-pill px-4 py-2'>Register Now</button></Link></div>
     </div>
     <div className="row text-white pt-5 mt-5 text-center" id="satbg">
  <div className="col">
    <p>Call Us 800-123-4567</p>
    <h1 className="display-1">Do You Need Help?</h1>
    <p>Our specialists can help you with finding the right tutor for you or your kids</p>

    <Link to="/Contacts/"> <button  className="btn btn-success rounded-pill px-4 py-2">MAKE AN APPOINTMENT</button></Link>
  </div>
</div>

</div>
<div className="container">
<div className='row'>
  <div className='col-lg-12 p-5'><h6>Enjoy online lessons with tutors</h6>
  <h3 className="fs-1 text-success"><span className="text-primary">Online</span>Lessons</h3>
  </div>
  </div>
<div className="row" id="boatbg">
  <div className='col-lg-7'>
<div className='card'>
    <div className='card-body p-5'>
    <h1 className="display-1"><span className="text-primary">Find Best</span></h1>
    <h3 className="fs-1 text-success"><span className="text-primary"></span>Tutors Anywhere </h3>
    <div className='card-text' >“Education is not the filling of a pail, but the lighting of a fire.” — William Butler Yeats<br/>

The point of teaching or tutoring is not to fill the student’s mind with a bunch of knowledge but to get him or her excited about learning and about the opportunities that are before them when they have learned something new.</div>
<div className="row">
<div class="four col-lg-3 ">
            <div class="counter-box colored"> <i class="fa fa-thumbs-up countericon"></i><h2> <span class="counter text-success">50000</span></h2>
                <p>Great Tutors</p>
            </div>
        </div>
        <div class="four col-lg-3 ">
            <div class="counter-box"> <i class="fa fa-user countericon"></i> <h2 ><span class="counter text-success">52100</span></h2>
                <p>Clever Students</p>
            </div>
        </div>
        <div class="four col-lg-3 ">
            <div class="counter-box"> <i class="fa fa-globe countericon"></i> <h2 ><span class="counter text-success">3900</span></h2>
                <p>World's Cities</p>
            </div>
        </div>
</div>
        </div>
    </div>
    </div>
   </div></div> 
    


       
  <div className="container-fluid">
  <div className='row'>
    <div className='col-lg-12 p-5'><h3 className="fs-1 text-success"><span className="text-primary">Latest</span> News</h3>
    </div>
    </div>
    
    <div className='row'>
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
          <p className='card-text '><h5>Embracing Technology for Enhanced Learning</h5></p>
          
      </div>
      
     </div>
     </div>
     <div className='row'>
  <div className='col-lg-12 p-5'><h6>Gallery</h6>
  <h3 className="fs-1 text-success"><span className="text-primary">Our</span> Portfolio</h3>
  </div>
</div>
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={require("../images/1.jpg")}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={require("../images/3.jpg")}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={require("../images/9.jpg")}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={require("../images/5.jpg")}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={require("../images/6.jpg")}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={require("../images/7.jpg")}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>

   </div>
    
  
      
   



      
     
      
  </>
  )
}






      
            
    

