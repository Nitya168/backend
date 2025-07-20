//  import React from "react";
export default function Dashboard(){
    return(
        <>
 <div className="col py-3">
 <div className='row'>
  <div className='col-lg-12 '>
  <h3 className="fs-1 text-success">DASHBOARD</h3>
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