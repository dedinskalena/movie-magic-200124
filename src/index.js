const express=require('express')
const app=express()
const port=5000
const handlebars=require('express-handlebars')
const path=require('path')

app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))



app.get('/',(req,res)=>{
    res.render('home',{layout:false})
})
app.listen(port,()=>console.log('Server listening on port 5000'))
