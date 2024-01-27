const mongoose=require('mongoose')
const catsSchema=new mongoose.Schema({
    name:{
       type: String,
       required:true
    },
    age:{
        type:Number,
        required:true,
        max:120,
        min:14
    },
    born:{
        type:String,
        required:true
    },
    nameInMovie:{
        type:String,
        required:true
    },
    castImage:{
        type:String,
        required:true,
        validate:{
            validator(value){return /^https?:\/\//.test(value)}
        },
        message:(prop)=>`This is invalid url for the cast image`

    }


})

const Cast=mongoose.model('Cast',catsSchema)
module.exports=Cast

 