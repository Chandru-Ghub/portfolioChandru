import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Transition from './Transition';
import {motion,useScroll} from 'framer-motion'
import FrontEndProjects from './FrontEndProjects.';
import Container from './Container';




const Navbar = () => {
    const {scrollYProgress} = useScroll()
    var fr = '< ';
    var bk = '/>...';
    const [toggle,setToggle] = useState(true);
   
  return (

    <>
   
            <div className='navbar'>
                {/* page scroll animation */}
                <motion.div
                    style={{
                        scaleX:scrollYProgress,
                        position:'fixed',
                        top:67,
                        right:0,
                        left:0,
                        height:2,
                        background:' rgb(53, 241, 53)',
                        transformOrigin:'0%'

                    }}
                ></motion.div>
                
                <div className='logo'>
                    <h4 className='hooklogo'>
                        {/* <span className='chan'>{fr} </span>ch<span className='chan'>an</span>dru <span className='chan'>{bk}</span> */}
                        <span class="material-symbols-outlined fh">
                        webhook
                        </span>
                        </h4>
                </div>
                <div className='onnu'>
                    <ul className={toggle?'lists':'lists_ok'}>     

                            <Link  to='/#home' 
                            onClick={()=>setToggle(!toggle)}
                            className='navs' smooth>
                                Home
                            </Link>
                            <Link  
                            onClick={()=>setToggle(!toggle)}to='/#about' className='navs' smooth>
                                About
                            </Link>
                            <Link  onClick={()=>setToggle(!toggle)}to='/#project' className='navs' smooth>
                                Project
                            </Link>
                            
                            <Link 
                            onClick={()=>setToggle(!toggle)} to='/#contact' className='navs' smooth>
                                Contact
                            </Link>


                    </ul>
                    <p onClick={()=>setToggle(!toggle)}>
                        {toggle? <span  class="material-symbols-outlined burs">
                            menu
                            </span>:<span class="material-symbols-outlined close burs">
                            close
                            </span>}
                    </p>
                    
                </div>
               
            </div>
          
           
            <div></div>
            {/* <Home/>
              <About/>
              <Project/>
              <Contact/>
            </div>
            <Routes>
            <Route path='/dig' Component={FrontEndProjects}/>
          </Routes>
         
              <Footer/> */}
              <Routes>
                <Route path='/' Component={Container}/>
                <Route path='/dig' Component={FrontEndProjects}/>
            </Routes>
            <Footer/>
    </>
  )
}

export default Navbar