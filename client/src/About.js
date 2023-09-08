import React, { useEffect } from 'react'
import './About.css'
import Ani from './Ani'
import react from './logos/react.png'
import mongo from './logos/mongodb.png'
import node from './logos/nodejs.png'
import html from './logos/html1.png'
import css from './logos/css1.png'
import javascript from './logos/js.png'
import express from './logos/express.png'
import bootstrap from './logos/bootstrap.png'
const About = () => {
 
  return (
   
    <div className='about' id='about'>
       <div className='cover'>
        <h3 className='abouth3' data-aos = 'fade-left'    data-aos-duration="1500" >About</h3>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ratione vel tempore tenetur! Suscipit et dolore tempora odio debitis. Architecto.
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ratione vel tempore tenetur! Suscipit et dolore tempora odio debitis. Architecto.
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ratione vel tempore tenetur! Suscipit et dolore tempora odio debitis. Architecto.
      <marquee className='marque' behavior="scroll" scrolldelay ='150' direction="side">
            <div className='techs'>
            <p className='begin'>
                    Begins
                </p>
                <img className='marimage html2' src={html} alt="" />
                <img className='marimage css2' src={css} alt="" />
                <img className='marimage javascript2' src={javascript} alt="" />
                <img className='marimage bootstrap2' src={bootstrap} alt="" />
                <img className='marimage react2' src={react} alt="" />
                <img className='marimage mongo' src={mongo} alt="" />
                <img className='marimage node2' src={node} alt="" />
                <img className='marimage express2' src={express} alt="" />
                <p className='end'>
                    learning...
                </p>
            </div>

      </marquee>
       </div>
       <div className="cubeim">
        <p className='role'  >
            <Ani/>
        </p>
      <h3> <span class="material-symbols-outlined">
      rotate_90_degrees_ccw
      </span>3DRotate</h3>
      </div>

        </div>
        
   
  )
}

export default About