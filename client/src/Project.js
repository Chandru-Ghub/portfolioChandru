import React, { useState } from 'react'
import './Project.css'
import axios from 'axios'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FrontEndProjects from './FrontEndProjects.'
const Project = () => {

    // const [name,setname] = useState()
    // const[email,setemail] = useState()
    const navigate = useNavigate();
  return (
    <div className='project'   id='project'>

    <h3 className='myworks' data-aos="fade-left" data-aos-duration="1500" >My works</h3>
    <h4 className='pro15'>15+ projects</h4>

        <div className='sections'>
            <section className='card mini'>
                mini Projects
            </section>
            <section className='card frontend'>
                Frontend Projects
            </section>
            <section className='card mern'>
                Full stack Projects
            </section>
        </div>

        <div className='lookup cv'>
            
            <button className='btncv'>
                 <Link to='/dig'>More Works</Link>
             </button>     
            
          
        </div>
    </div>
  )
}

export default Project