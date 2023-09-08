import React from 'react'
import { useNavigate } from 'react-router-dom'
// import FooterCopy from './FooterCopy'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cart from './thumbnail/cart.png'
import emoji from './thumbnail/emoji.png'
import burger from './thumbnail/burger.png'
import meal from './thumbnail/mealdb.png'
import guvi from './thumbnail/guvi.png'
import engine from './thumbnail/imageSearch.png'
const FrontEndProjects = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const navigate = useNavigate()
  return (
    <div  className='projects' >

       
        <p >
       
                <button  className='back' onClick={()=> navigate('/#project')}>
                {/* <Link className='ftnav' to='/#project' smooth >Go back </Link> */}
                <span class="material-symbols-outlined">
                    keyboard_backspace
                    </span>Go back 
                </button>
        </p>
        
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti alias, quibusdam exercitationem laboriosam at dicta quo nobis beatae, nam recusandae dignissimos reiciendis optio sit. Eius impedit animi molestiae eveniet magnam unde natus sunt, esse temporibus consectetur eaque delectus ad culpa harum excepturi autem corrupti rerum atque tenetur quod aperiam aut perspiciatis. Eum veniam commodi illo porro officia animi dolore molestias debitis, asperiores vitae velit reprehenderit rem quidem dignissimos voluptate amet? Alias asperiores quo, minima veritatis at odit reiciendis rem iusto quas cumque nihil ratione id laborum possimus sapiente. Iste quia perferendis neque error, nemo nobis aliquam vel! Non, placeat exercitationem.
        <div className='thumbnailContainer' >

            <div className='imgcontainer' data-aos="fade-right" data-aos-duration="1000">
            <img className='thumbnail' src={cart} alt="" />
                <p className='view'>
                <a href="https://startling-longma-20942a.netlify.app/" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-up" data-aos-duration="1000">
            <img className='thumbnail' src={emoji} alt="" />
                <p className='view'>
                <a href="https://chandru-ghub.github.io/Front-end-TASK-D20-/API%20-2%20Emojhub/index.html#bottom" target='blank'>ViewProject</a></p>
            </div>
            
            <div className='imgcontainer' data-aos="fade-left" data-aos-duration="1000">
            <img className='thumbnail' src={meal} alt="" />
                <p className='view'>
                <a href="https://chandru-ghub.github.io/Front-end-TASK-D20-/API%20-%201%20The%20meal%20DB/index.html" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-right" data-aos-duration="1000">
            <img className='thumbnail' src={burger} alt="" />
                <p className='view'>
                <a href="https://chandru-ghub.github.io/Front-end-TASK-D20-/API%20-3%20Bob's%20burger/index.html" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-up" data-aos-duration="1000">
            <img className='thumbnail' src={guvi} alt="" />
                <p className='view'>
                <a href="https://comforting-horse-824c25.netlify.app/All" target='blank'>ViewProject</a></p>
            </div>
            <div className='imgcontainer' data-aos="fade-left" data-aos-duration="1000">
            <img className='thumbnail' src={engine} alt="" />
                <p className='view'>
                <a href="https://startling-longma-20942a.netlify.app/" target='blank'>ViewProject</a></p>
            </div>
           

        </div>
    </div>
  )
}

export default FrontEndProjects