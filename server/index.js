const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv').config()
const userSchema = require('./model/userSchema')
const PORT = process.env.Port || 3000;

app.use(express.json())
app.use(cors())

app.get('/get',(req,res)=>{
    res.send("i'm working")
})

//input data
app.post('/formdata',(req,res)=>{
        const{name,email,message} = req.body
        console.log(message)
        userSchema.create(req.body)
        .then(result => {res.json('data added')

         //to send mail to the admin after form submission
         var nodemailer = require('nodemailer');
         var transporter = nodemailer.createTransport({
             service: 'gmail',
             auth:{

                 user: 'chandrumech455@gmail.com',
                 pass: mail_key
             }

         });
         var mailOptions = {

             from: 'chandrumech455@gmail.com',
             to: 'chandruinfo455@gmail.com',
             subject: `${name} visited your portfolio and the message`,
             text:`Email:${email} \n ${message}`
         };

         transporter.sendMail(mailOptions, (err,info)=>{

             if(err){
                 console.log(err);
             }else{
                 console.log('message '+ info.response);
                 return res.send( 'Success')
                 
             }
         });    
    }
        
        
        )
        .catch(err => res.json(err))
       
})

//connecting the server to Data base
mongoose.connect(process.env.DataBase)
.then(result=>console.log('Database connected sucessfully'))
.catch(err => console.log(err))

app.listen(PORT,()=>{
    console.log('Server is running in port ',PORT)
})

