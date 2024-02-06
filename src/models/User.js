
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        tolowercase:true,
        unique:true

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
userSchema.virtual('rePassword')
    .set(function(value){
        if(value!=this.password){
            throw new mongoose.MongooseError('Password missmach')
        }
         
    })

const User=mongoose.model('User',userSchema)
module.exports=User