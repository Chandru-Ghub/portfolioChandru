import React from 'react'
import './Footer.css'
import linkedin from './check.png'
import github from './github.png'
import whatsapp from './whatsapp.png'
import {HashLink as Link} from 'react-router-hash-link'
const Footer = () => {
    const lgname = '<Chandru/>'
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className='footer'>
         {/* <p className='line'></p> */}
    <div className='logoname'>
                {lgname}
                {/* <span style={{fontSize:'30px'}} class="material-symbols-outlined fh">
                        webhook
                        </span> */}
    </div>
    <p className='line1'></p>
    <ul className='navs2'>
        <Link className='ftnav' to='/' smooth >HOME</Link>
        <Link className='ftnav' to='#about' smooth > ABOUT</Link>
        <Link className='ftnav' to='/' smooth > WORK</Link>
        <Link className='ftnav' to='/' smooth > SOURCE CODE</Link>
        <Link className='ftnav' to='/' smooth > HIT ME UP</Link>
        
    </ul>
    <p className='line2'></p>
    <div className='socialMedia'>
       
     
        <p className='copy'> &copy; {year} All Rights Reserved</p>
        <ul className='iconslogo'>
            <li>
                <a href="">
                    <img className='in' src={linkedin} alt="linkedin" />
                </a>
            </li>
            <li>
                <a href="">
                    <img className='imgicon' src={github} alt="linkedin" />
                </a>
            </li>
            <li>
                <a href="">
                    <img className='imgicon' src={whatsapp} alt="linkedin" />
                </a>
            </li>
        </ul>
        
        <p className='imprint'>Designed and created by<span style={{color:'rgb(53, 241, 53)'}}>&nbsp;Chandru</span></p>
    </div>
   
    </div>
  )
}

export default Footer