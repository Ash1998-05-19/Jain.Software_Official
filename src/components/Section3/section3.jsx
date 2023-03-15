import React from "react";
import "./section3.css";
import img1 from "../../assets/sec3-1.jpg";
import img2 from "../../assets/sec3-2.jpg";

function section3() {
  return (
    <div className="sec3" >
        <div className="sec3-textbox1" >
        <p ><b>Who we are</b></p>
        <h1>We build greater futures through innovation and collective knowledge.</h1>
        <p>Jain Software is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses in their transformation journeys for over 50 years. </p>
        <button className="btn btn-danger" style={{"margin-right":"835px"}}>Learn More</button>
        </div>
        <img src={img1} class="img-fluid w-50" alt="..."></img>

        <div className="sec3-textbox2" >
        <h1>Everything starts with ambition</h1>
        <p>Business solutions for a tomorrow built on technology. </p>
        <button className="btn btn-danger">Learn More</button>
        </div>
        <img src={img2} class="img-fluid w-50" style={{height:"475px"}} alt="..."></img>
    
    </div>
  );
}

export default section3;
