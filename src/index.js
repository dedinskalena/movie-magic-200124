const express=require('express')
const app=express()

const configHandelbars=require('./config/configHandelbars.js')
const configExpress=require('./config/configExpress.js')

const port=5000
const routes=require('./routes.js')

 
configHandelbars(app)
configExpress(app)


app.use(routes)


app.listen(port,()=>console.log('Server listening on port 5000'))
