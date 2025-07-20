import React from "react";
export default function Home (){
    return(
        <>
            <div className='container'>
            <div className='row'>
  <div className='col-lg-12 p-5'><p>Ask Us Anything!</p>
  <h3 className="fs-1 text-success"><span className="text-primary">Most asked</span> Questions</h3>
  
                     <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What is the success rate of the centre?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Marking a stupendous result , around 13,000 students of SmartHead have cleared competitive exams. Out of the 13,000, 4088 students from across the country inked an impressive score of 95 percentile and above, 968 have scored 99 percentile and above.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What is the quality of teaching?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Integrated Teaching Approach<br/>
      The Standardized Education Delivery methodology at SmartHead ensures perfect and consistent coaching by our faculty members. The teaching methodology is so unique and holistic that it generates not only excellent classroom discussions but also insightful study material.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Do They Provide Any Study Materials?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Course Benefits<br/>
      Students do not need to buy other books available in market  as the study material of SmartHead is adequate for preparation of both school/board exams as well as competetive Exams . Students get error free content which is regularly updated and is based on the latest exam pattern.
      </div>
      </div>
  </div>
</div>
</div>

</div>
<div className='row' >
  <div className='col-lg-12 p-5'>
    <p>Quality Tutoring services</p>
  <h3 className="fs-1 text-success"><span className="text-primary">Our</span> History </h3>
  </div></div>
<div className="row">
<div class="row d-flex justify-content-center mt-100">

<div class="col-lg-6">



    <div class="progress blue ">
      <span class="progress-left">
                        <span class="progress-bar"></span>
      </span>
      
      <span class="progress-right">
                        <span class="progress-bar"></span>
      </span>

      
      <div class="progress-value">90%</div>
      
    </div>


    
      <div class="progress yellow">
        <span class="progress-left">
                        <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
                        <span class="progress-bar"></span>
        </span>
        <div class="progress-value">75%</div>
      </div>
      


   
</div>
<div className="row ">
  <div className="col-lg-4 text-end">
        <h4 id="head" className="">HTML & CSS</h4>
        </div>
        <div className="col-lg-3 text-center">
      <h4 id="head">Web Designing</h4>
      </div>
     </div>

</div>
        <div className="row text-center">
        <div class="four col-md-4 p-5">
            <div class="counter-box colored"> <i class="fa fa-thumbs-up countericon"></i><h2> <span class="counter text-success">50000</span></h2>
                <p>Great Tutors</p>
            </div>
        </div>
        <div class="four col-md-4 p-5">
            <div class="counter-box"> <i class="fa fa-user countericon"></i> <h2 ><span class="counter text-success">52100</span></h2>
                <p>Clever Students</p>
            </div>
        </div>
        
        <div class="four col-md-4 p-5">
            <div class="counter-box"> <i class="fa fa-globe countericon"></i> <h2 ><span class="counter text-success">3900</span></h2>
                <p>World's Cities</p>
            </div>
        </div>
        </div>
        
             
<div className='row'>
  <div className='col-lg-12 p-5'>
  <h3 className="fs-1 text-success"><span className="text-primary">Recent</span> Posts </h3>
  </div>
  </div>
              <div className='row p-5'>
              <div className="col-lg-12">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src={require('../images/s2.jpg')} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item active">
      <img src={require('../images/s1.jpg')} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       </div> 
       </div>
       <div class="carousel-item active">
      <img src={require('../images/s3.jpg')} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
      
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
<div className='row' id="choosebg">
  <div className='col-lg-12 p-5'>
  <p>SmartHead Advantages</p>
  <h3 className="fs-1 text-success"><span className="text-primary">Why choose</span> Us?</h3>
  </div>
</div>
<div className="row" id="choosebg">
  <div className="col-lg-6" >
    <div className="container">
    
  <div class="progress blue">
      <span class="progress-left">
                        <span class="progress-bar"></span>
      </span>
      <span class="progress-right">
                        <span class="progress-bar"></span>
      </span>

      
      <div class="progress-value">90%  </div>
     
  
     </div>
 
 
    

    
      <div class="progress yellow">
        <span class="progress-left">
                        <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
                        <span class="progress-bar"></span>
        </span>
        <div class="progress-value">75%</div>
        
      </div>
      <div class="progress green">
        <span class="progress-left">
                        <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
                        <span class="progress-bar"></span>
        </span>
        <div class="progress-value">35%</div>
       
        
      </div>
      </div>
      <br/>

      <div className="col-lg-11 ps-5">
        <h4 id="head" className="">
          <span className="text-primary"> Graphic Design </span>
          <span className="text-warning">  HTML & CSS </span>
          <span className="text-success"> Web Development </span>
          </h4>
   
      </div>
      </div>
    
    <div className="col-lg-6">
      <ul>
       <li>SmartHead Institute boasts a team of highly qualified and experienced educators who are experts in their fields, dedicated to imparting knowledge and fostering academic growth.</li>

       <li> We believe in a personalized approach to learning, tailoring our programs to suit individual learning styles and academic goals. This ensures that each student receives the attention and support they need to succeed.</li>

       <li> With a strong history of academic success, our institute has consistently helped students achieve their educational milestones and excel in their studies.</li>

       <li>We leverage innovative teaching methods and cutting-edge technology to enhance the learning experience, making education engaging, interactive, and effective.</li>

       <li>Beyond academics, SmartHead Institute provides comprehensive support services including counseling, mentorship, and career guidance to help students navigate their educational journey successfully.</li>

       <li> At SmartHead Institute, excellence is not just a goal but a commitment. We strive to inspire and empower our students to achieve their fullest potential academically and beyond.</li>
   </ul> </div>
    
</div>
  
        <div className='row'>
  <div className='col-lg-12 p-5'>
  <h3 className="fs-1 text-success"><span className="text-primary">Price </span> Tables </h3>
  </div>
  </div>
  <div className="row">
    <div className="col-lg-3 p-5">
  <div class="card" >
  
  <div class="card-body">
    <h3 class="card-title text-success">Basic<br/> Preparation<br/>3,262/-/month</h3>
    <p class="card-text">14 hours + 1 FREE bonus hour Get 2-3 live sessions or four 1,000 word essays</p>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Get it</button>
  </div>
</div>
</div>
<div className="col-lg-3 p-5">
  <div class="card">
  
  <div class="card-body">
    <h4 class="card-title text-success">Standard Preparation<br/>6,607.16/-/month</h4>
    <p class="card-text">22 hours + 2 FREE bonus hours Get six live sessions or feedback on six 1,000 word essays</p>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Get it</button>
  </div>
</div>
</div>
<div className="col-lg-3 p-5">
  <div class="card" >
  
  <div class="card-body">
    <h4 class="card-title text-success">Premium Preparation<br/>12.462/-/month</h4>

    <p class="card-text">22 hours + 2 FREE bonus hours Get six live sessions or feedback on six 1,000 word essays</p>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Get it</button>
  </div>
</div>
</div>

      
<div className="row p-5">
                
            
                <h1 className="fs-1 text-primary">Location in Bengaluru, Karnataka</h1>
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
    </div>
    </>
    
    
    
    
     
     
    

 
  
       
    )
}