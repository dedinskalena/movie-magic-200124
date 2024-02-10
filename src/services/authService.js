const User=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('../lib/jwt')
const secret='afdhfkflboirnmvmxvs'

exports.register=async (userData)=>{
    const user=await User.findOne({email:userData.email});
    //console.log(user)
    if(user){
        throw new Error('Email already exist')
    }
    return User.create(userData)
}

exports.login=async (email,password)=>{
    //get user from db
    const user=await User.findOne({email})

    //check if user exist
    if(!user){
        throw new Error('Can not find email or password')
    }

    //check if password is valid
    const isValid=await bcrypt.compare(password,user.password)
    if(!isValid){
        throw new Error('Can not find email or password')
    }

    //generate JWT token and retern token
    const payload={
        _id:user._id,
        email:user.email
    }
     const token=await jwt.sign(payload,secret,{expiresIn:'2h'})
     return token

}