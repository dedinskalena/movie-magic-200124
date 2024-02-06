
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        tolowercase:true

    },
    password:{
        type:String,
        required:true
    }
})
userSchema.pre('save',async function(){
    //this.password
    const hash=await bcrypt.hash(this.password,12)
    this.password=hash
})
const User=mongoose.model('User',userSchema)
module.exports=User