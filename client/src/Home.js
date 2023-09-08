import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
// import {useTypewriter,Cursor} from 'react-simple-typewriter'
const Home = () => {

    const [state] = useState({
        title: "Hi",
        titleTwo: "I'm",
        titleThree: "Kyochan",
        titleFour: "FullStackDeveloper"

    })
    // const {text} = useTypewriter({
    //     words:['Chandru','Web Developer','Mern stack'],
    //     loop:{},
    // })

   
  return (
    <div >
    <div  data-aos="fade-right" data-aos-duration="1000" id='home' className='home' >

        <div>
             <p className='pp'>I am Chandru</p>
            <div className='type'>
            <p className='pp'>I'm</p>
                <div>   
                    <h5 className='type'>
                        <Typewriter 
                            options={{
                                autoStart:true,
                                loop:true,
                                delay:40,
                                strings:[
                                    " a FullStack Developer",
                                    " a youtuber",
                                    " Chandru"]

                            }}
                            />
                    </h5>
                    
                </div>
           </div>
          
           <h2 className='build'>I build things for the web</h2>
            <p className='summary'>Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level position. Ready to help team achieve company goals.</p>
            </div>
            <div className='cv'>
                <button className='btncv'>
                    <a style={{color:'black'}} href="Resume chandru.pdf" download = 'ChandruResume.pdf'>
                    Download CV
                    </a>
                    
                </button>
                

            </div>
    </div>
    
   
    </div>
  )
}

export default Home