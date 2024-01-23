const router=require('express').Router()
const { create } = require('express-handlebars')
const movieService=require('../services/movieService')


router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',(req,res)=>{
 const newMovie=req.body
 
 movieService.create(newMovie)
 res.redirect('/')   
})

router.get('/movies/:movieId',(req,res)=>{
    const movieId=req.params.movieId
    let movie=movieService.getOne(movieId)
    let stars=Number(movie.rating)
    movie.rating=new Array(stars).fill(true)
    //console.log(movie.rating)
    res.render('details',{movie})
})
module.exports=router