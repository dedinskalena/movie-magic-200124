const router=require('express').Router()
const { create } = require('express-handlebars')
const movieService=require('../services/movieService')


router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',(req,res)=>{
 const newMovie=req.body
 console.log(newMovie)
 movieService.create(newMovie)
 res.send('Movie create')    
})
module.exports=router