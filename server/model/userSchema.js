const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   message:{
    type:String,
    required:true
   },
   time:{
    type:String,
    default:new Date
}

})
module.exports = mongoose.model('SenderData',userSchema)