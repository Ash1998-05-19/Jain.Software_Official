import React from 'react'
import './carosal.css'
import logo from '../../assets/jainsoftware-2.svg'
import video2 from '../../videos/video-1.mp4'

function carosal() {
  return (
    <div>
      <section className="sec2">
    <div className="banner1" >
        <video src={video2} autoPlay loop muted/>
        <div className="text-box text-box1">
            <p>Central India’s Fastest Growing Software Company</p>
            <img src= {logo} alt=""/>
            <h1>Software : ₹ 4999</h1>
            <p >Software & Website Development starts from ₹4999 .No hidden charges</p>
            <button type="button" className="btn btn-lg btn-outline-light">Signup now</button>

        </div>
    </div>
   
</section>
    </div>
  )
}

export default carosal
