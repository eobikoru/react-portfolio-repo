import React from 'react'
import "./testimonials.scss"
function Testimonials() {
  return (
    <div className='testimonials'  id='testimonials'>
      <div className="teleft">
        <img src="./assets/abt.png" alt="" />
      </div>
      <div className="teright">
        <div className="terightwrapper">
          <div className="teone">
            <h1>About me</h1>
          </div>
          <div className="tetwo">
            <h2> 
            I'm a Frelancer Front-end <b>Developer</b> with over 2 years of experience</h2>
          </div>
          <div className="tethree">
            <p>I'm a freelancer-front-end developer with over 2 years experience  , I'm from nigeria. i code and create bweb elements for amazing people around the wrld .</p>
          </div>
          <div className="tefour">

            <button>Contact me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials