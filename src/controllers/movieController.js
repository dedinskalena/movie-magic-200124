const router=require('express').Router()
const { create } = require('express-handlebars')
const movieService=require('../services/movieService')


router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',async (req,res)=>{
 //const newMovie=req.body
 console.log(newMovie)
 try{
     await movieService.create(newMovie)
     res.redirect('/')   

 }catch(err){
    console.log(err.message)
    res.redirect('/create')
 }
})

router.get('/movies/:movieId',(req,res)=>{
    const movieId=req.params.movieId
    let movie=movieService.getOne(movieId)
    let stars=Number(movie.rating)
    //movie.rating=new Array(stars).fill(true)
    //console.log(movie.rating)
    res.render('details',{movie})
})
module.exports=router