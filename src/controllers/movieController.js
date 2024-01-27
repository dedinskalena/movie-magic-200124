const router=require('express').Router()
const { create } = require('express-handlebars')
const movieService=require('../services/movieService')
const castService=require('../services/castService')


router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',async (req,res)=>{
 const newMovie=req.body
 //console.log(newMovie)
 try{
     await movieService.create(newMovie)
     res.redirect('/')   

 }catch(err){
    console.log(err.message)
    res.redirect('/create')
 }
})

router.get('/movies/:movieId',async (req,res)=>{
    const movieId=req.params.movieId
    let movie=await movieService.getOne(movieId).lean()
    let stars=Number(movie.rating)
    movie.rating=new Array(stars).fill(true)
    //console.log(movie.rating)
    res.render('details',{movie})
})

router.get('/movies/:movieId/attach',async (req,res)=>{
    const movie=await movieService.getOne(req.params.movieId).lean()
    const casts=await castService.getAll().lean()
    res.render('movie/cast-attach',{...movie,casts})
})




module.exports=router