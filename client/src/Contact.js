import React, { useState } from 'react'
import './Contacts.css'
import axios from 'axios'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const Contact = () => {

  
    const [showmail,setShowmail] = useState(true)

    // formik
    const formik = useFormik({

        initialValues:{
            name:'',
            email:'',
            message:''
        },

        validationSchema: Yup.object({
                name:Yup.string().max(10,'Name must be 10 characters or less')
                .required('Required'),

                email:Yup.string().email('Invalid email address')
                .required('Required'),

                message:Yup.string().min(20,'minimum 20 characters required')
                .required('Required')
               
        }),
        onSubmit:(values,{resetForm})=>{
            resetForm({values :''})
           const {name,email,message}= values;
           console.log(name,email,message);
        axios.post('http://localhost:3800/formdata',{name,email,message})
        .then(msg => {console.log(msg)
            if(msg.data =='data added') setShowmail(!showmail)
        })
        .catch(err => console.log(err))
        }
    })


  return (


    
       
        <div className='contactdiv'  id='contact' >


                    <div className='infocontact'>
                        <h3 className='cname' data-aos="fade-left" data-aos-duration="1500" >Contact</h3>
                        <p className='msg'>I am interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me using below form either.</p>
                        <p className='mailicon'>
                        <span class="material-symbols-outlined">
                        mail
                        </span>
                        <a className='mymail' href="mailto:chandruinfo455@gmail.com">
                    chandruinfo455@gmail.com
                        </a>
                        </p>
                    </div>

                    {showmail?
                    <div className='big'>
                    <div className='myforms'>
                        <form className='formsui' onSubmit={formik.handleSubmit}>

                            {/* NAME input field */}
                            <label className='lb1 label' htmlFor="name">NAME</label>
                            <input  value={formik.values.name}   className='inp' name='name' type="text" onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                            placeholder='Enter your name'/>

                            { formik.touched.name && formik.errors.name?
                            <p  className='err'> <span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.name}</p>:null}


                            {/* Email input field */}
                            <label className='lb2 label' htmlFor="email">EMAIL</label>
                            <input  value={formik.values.email}  className='inp' name='email'  onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter email ID'/>
                            { formik.touched.email && formik.errors.email?
                            <p className='err' ><span class="material-symbols-outlined eri">
                                error
                            </span>{formik.errors.email}</p>:null}
                            

                            {/*MESSAGE input field  */}
                            <label className='lb3 label'htmlFor="message">MESSAGE</label>
                            <textarea  value={formik.values.message} className='inp ta'name='message' type="text" onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            placeholder='Enter message here'/>
                            {formik.touched.message && formik.errors.message?
                            <p  className='err'><span class="material-symbols-outlined eri">
                                error
                                </span>{formik.errors.message}</p>:null}

                            <button className='hit' type='submit'> Hit me up <span class="material-symbols-outlined">
                            rocket_launch
                            </span></button>
                        </form>
                    </div>
        
                    </div>: <div className='sentmsg'>
                        <p className='sucess'>Sucessfull</p>
                        <p className='touch'>I will be in touch with you</p>
                    <span class="material-symbols-outlined sent">
                            rocket_launch
                            </span>
                        </div>}
   </div>
                
    
  )
}

export default Contact