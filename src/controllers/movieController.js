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
    const movie=movieService.getOne(movieId)
    movie.ratingStars=new Array(Number(movie.rating)).fill('*').join(' ')
    
    res.render('details',{movie})
})
module.exports=router