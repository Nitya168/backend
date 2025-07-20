import React from "react";
export default function Home (){
    return (
    <>   
      <div className="container">
        <div className="row">
*<form class="form-inline" id="findbg">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only text-success">Email</label>
    <input type=" fs-3 text-success" readonly class="form-control-plaintext" id="staticEmail2" value="Find your tutor"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Enter Subject"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Zip Code"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <select class="form-control">
    <input type="password" class="form-control" id="inputPassword2" placeholder="All Groups"/>
    
      <option>All Groups</option>
    <option>Online</option>
    <option>Personal</option>
    </select>
    
   
  </div>
  <button type="submit" class="btn btn-success mb-2">Find Now</button>
</form>
        </div>
        
        
      
      
      
  

<div className='row'>
        <div className='col-lg-12 p-5'><h3 className="fs-1 text-success"><span className="text-primary">Most</span> Popular</h3>
        </div>
        </div>
        <div className="row mb-5" id="aboutbg">
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body p-5'>
                
                <h3 className='card-title text-success'><b>Trending subjects</b></h3>
                <div className="row py-5">
                  <div className="col-lg-6">
                    <p className='card-text'>Mathematics<br /> Creative Writing<br /> English<br /> Accounting<br /> Coding<br /> Spanish<br />
                  Communication<br />Business Studies<br />Chemistry<br />Engineering<br /> Architecture<br /> Marketing
                  </p>
                  </div>
                </div>
              </div>
            </div></div>
            <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body p-5'>
                
                <h3 className='card-title text-success'><b>Categories</b></h3>
                <div className="row py-5">
                  <div className="col-lg-6">
                    <p className='card-text'>Distance Learning<br /> Lesson Planning<br /> Online Tutoring<br /> Resources<br />Tutoring
                  </p>
                  </div>
                </div>
              </div>
            </div></div>
            </div>
            
            </div>



<div class="container mt-40 " id='cards01'>
            
<div class="row mt-30 p-5">
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
    
   
    <div class="col-md-4 col-sm-6 p-5">

<div class="box5">
    <img class="pic-1" src={require('../images/22222222.jpeg')}  alt="specific size image" />
    <ul class="icon">
        <a href="#" class="fa fa-search"></a>


       <a href="#" class="fa fa-link"></a>
    </ul>
    <div class="box-content">
        <h3 class="title">Shiv Malik</h3>
        <span class="post">Chemistry Architecture Communication</span>
    </div>
</div>
</div>
<div class="col-md-4 col-sm-6 p-5">

<div class="box5">
    <img class="pic-1" src={require('../images/333333.jpg')}  alt="specific size image" />
    <ul class="icon">
        <a href="#" class="fa fa-search"></a>


       <a href="#" class="fa fa-link"></a>
    </ul>
    <div class="box-content">
        <h3 class="title">Mishti Goyal</h3>
        <span class="post">Engineering Marketing Coding </span>
    </div>
</div>
</div>
<div class="col-md-4 col-sm-6 p-5">

<div class="box5">
    <img class="pic-1" src={require('../images/44.jpg')}  alt="specific size image" />
    <ul class="icon">
        <a href="#" class="fa fa-search"></a>


       <a href="#" class="fa fa-link"></a>
    </ul>
    <div class="box-content">
        <h3 class="title">Davy Devgan</h3>
        <span class="post">Biology Coding Spanish</span>
    </div>
</div>
</div>
</div>
</div>





     </>       


          

           
           
        
        
     
        
    )
}