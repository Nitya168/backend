import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
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
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Find a tutor</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Become a tutor</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contacts</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Login</a>
                    </li>


                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>


        <div className="row text-white pt-5 mt-5 text-center">
          <div className="col">
            <p>Personal and Online Tutor</p>
            <h1 className="display-1">Find Private Tutor</h1>
            <button className="btn btn-success rounded-pill px-4 py-2">Find Tutor Now</button>
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
                    <p className='card-text'>Mathematics<br /> Creative Writing<br /> English<br /> Accounting<br /> Coding<br /> Spanish<br />
                    </p>
                  </div>
                  <div className="col-lg-6"><p>
                    Communication<br />Business Studies<br />Chemistry<br />Engineering<br /> Architecture<br /> Marketing</p></div>
                </div>
              </div>
            </div></div>
          <div className="col-lg-6 p-5 text-dark text-center">
            <h1>Watch Our Video Presentation</h1>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row" id="catbg">
          <div className='col-lg-12 p-5'>
            <p>All tutors are guaranteed by us</p>
            <h3 className="fs-1 text-success"><span className="text-primary">100%</span>Guarantee</h3>
          </div>

          <div className='col-lg-4'><h5>Professional Tutors</h5>
            Et scaevola delicata vix, mea ei invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voluptaria ex mel. Eos malis</div>
          <div className='col-lg-4'><h5>Real Results Only</h5>
            Et scaevola delicata vix, mea ei invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voluptaria ex mel. Eos malis</div>
          <div className='col-lg-4'><h5>University Approved</h5>
            Et scaevola delicata vix, mea ei invidunt indoctum, quodsi eripuit definiebas at pri. Placerat voluptaria ex mel. Eos malis</div>
        </div> </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 p-5'><h6>Find the right tutor for you</h6>
            <h3 className="fs-1 text-success"><span className="text-primary">Featured</span>Tutors</h3>
          </div>
        </div>


        <div className='row'>
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <img src={require('./images/taylor jones.jpeg')} width='60%' height='80%' /></div>
              <p className='card-text'><h6 > Chemistry Coding Communication</h6><h5>Taylor Jones</h5></p></div></div>
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <img src={require('./images/StevenCollinsHallmarkTutors-740x792.jpg')} width='60%' height='80%' /></div>
              <p className='card-text'><h6>English Marketing Mathematics</h6><h5>Steven Collins</h5></p></div></div>
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <img src={require('./images/sharon B.jpeg')} width='60%' height='80%' /></div>
              <p className='card-text'><h6>Architecture Spanish World History</h6><h5>Sharon Brown</h5></p></div></div>
        </div>
        <div className='row'>
          <div className='col-lg-9 p-5'><h3 className="fs-1 text-success"><span className="text-primary">Want to becomea tutor in</span> SmartHead?</h3>

            <p>Smarthead collaborates professional and tale nteed tutors from all ove the world!Join us right now</p>
          </div>
          <div className="col-lg-3 p-5">
            <button className='btn btn-success rounded-pill px-4 py-2'>Register Now</button></div>
        </div>
        <div className="row text-white pt-5 mt-5 text-center" id="satbg">
          <div className="col">
            <p>Call Us 800-123-4567</p>
            <h1 className="display-1">Do You Need Help?</h1>
            <p>Our specialists can help you with finding the right tutor for you or your kids</p>

            <button className="btn btn-success rounded-pill px-4 py-2">MAKE AN APPOINTMENT</button>
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
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body p-5'>
                <h1 className="display-1"><span className="text-primary">Find Best</span></h1>
                <h3 className="fs-1 text-success"><span className="text-primary"></span>Tutors Anywhere </h3>
                <div className='card-text'>Voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsamvoluptatem quia voluptas sit aspernatur aut odit aut fugit, sedquia consequuntur.</div>
                <div class="row">
                  <div class="four col-md-3">
                    <div class="counter-box colored"> <i class="fa fa-thumbs-o-up"></i> <span class="counter">50000</span>
                      <p>Great Tutors</p>
                    </div>
                  </div>
                  <div class="four col-md-3">
                    <div class="counter-box"> <i class="fa fa-group"></i> <span class="counter">52100</span>
                      <p>Clever Students</p>
                    </div>
                  </div>
                  <div class="four col-md-3">
                    <div class="counter-box"> <i class="fa fa-shopping-cart"></i> <span class="counter">3900</span>
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
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <img src={require('./images/download.jpeg')} width='100%' height='350' /></div>
              <p className='card-text'>Back to scool:Tutoring as a proactive Tool</p></div>
          </div>
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <img src={require('./images/hero_blog_Student-Wellness_Homework_photo_iStock_878931780_monkeybusinessimages.webp')} width='100%' height='350' />
              </div>
              <p className='card-text'>10 tips How to find your ideal tutor</p>
            </div>
          </div>
          </div>
          <div className='col-lg-4'>
            <div className='card' id="satbg">
              <div className='card-body'>
          <p className='card-text'><h1>Subscribe on our News</h1></p>
          <button className="btn btn-success rounded-pill px-6 py-2">E-Mail  </button>
        </div>
      </div>
        </div>
      </div>


      <div className='row'>
        <div className='col-lg-12 p-5'><h6>More than 50,000 tutors in our network</h6>
          <h3 className="fs-1 text-success"><span className="text-primary">Our</span> Network</h3></div>

        <div className='col-lg-9'>
          <img src={require('./images/map.jpg')} width='80%' height='300' /></div>
        <div className='col-lg-3'>
          <div className='card'>
            <div className='card-body'>
              <h3 className='card-title'><b><span className="text-primary">Large Network</span></b></h3>
              <p className='card-text'>Et scaevola delicata, mea invidunt indoctum, quodsi eripuit definiebas pri. Placer voluptaria. Eos malis civibus an. Per dolor aperiam deterruisset at, nec dicam affert ex.</p>
              <div className='card-footer'>
                <button className="btn btn-success rounded-pill px-4 py-2 justify-content-center text-center">Read More</button></div>


            </div>
          </div>
        </div>
      </div>









      <div className='container-fluid p-5'>

        <div className='row  text-white' id='catbg' >
          <div className='col-lg-4'><h5>Smarthead</h5>
            Et scaevola delicata vix, mea ei invidunt quodsi eripuit definiebas at pri. Placerat voluptaria meleos malis civibus an dolor</div>
          <div className='col-lg-4'><h5>Quick links</h5>
            <a href=''>About Us</a><br /><a href=''>Our News</a><br /><a href=''>contact us</a><br /><a href=''>Become a tutor</a><br /><a href=''>Portfolio</a>
          </div>
          <div className='col-lg-4'><h5>Our contacts</h5>
            <i class="fa-solid fa-location-dot p-2"></i>350 Avenue, New York, NY 10001<br />
            <i class="fa-solid fa-message p-2"></i>info@example.com<br />
            <i class="fa-solid fa-phone p-2"></i>800-123-4567
          </div>
        </div>
      </div></div>


  );
}

export default App;
