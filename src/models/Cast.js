const mongoose=require('mpngoose')
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
            validator(value){return/^http?:\/\//.test(value)}
        },
        message:(prop)=>`This is invalid url for the cast image`

    }


})

const Cast=mongoose.mode('Cast',catsSchema)
module.exports=Cast

 