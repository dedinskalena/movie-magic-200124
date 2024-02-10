
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        tolowercase:true,
        unique:true,
        match:[/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,'Invalid email adress'],
        minLength:[10, 'Email should be at least 10 caracters']

    },
    password:{
        type:String,
        match:[/^[a-zA-Z0-9]+$/,'Password should be alfanumeric'],
        minLength:[6,'Password is shorter than 6 caracters'],
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