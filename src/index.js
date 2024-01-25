const express=require('express')
const mongoose=require('mongoose')
const Movie=require('./models/Movie.js')
const app=express()

const configHandelbars=require('./config/configHandelbars.js')
const configExpress=require('./config/configExpress.js')

const port=5000
const routes=require('./routes.js')

 
configHandelbars(app)
configExpress(app)


app.use(routes)

mongoose.connect(`mongodb://127.0.0.1:27017/magic-movies`)
.then(()=>{
    console.log('DB connected')
    app.listen(port,()=>console.log('Server listening on port 5000'))
})
.catch(err=>console.log('Can not connect to DB'))
//mongoose.connection.on('error',(err)=>console.error(err))

