const router=require('express').Router()
//const { create } = require('express-handlebars')
const movieService=require('../services/movieService')
const castService=require('../services/castService')
const {isAuth}=require('../middlewares/authMiddleware')
const { getErrorMassage } = require('../utils/errorUtils')


router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',async (req,res)=>{
 const newMovie={
     ...req.body,
     owner:req.user._id

 }

 //console.log(newMovie)
 try{
     await movieService.create(newMovie)
     res.redirect('/')   

 }catch(err){
    const message=getErrorMassage(err)
    res.render('create',{error:message,...newMovie})
 }
})

router.get('/movies/:movieId',async (req,res)=>{
    const movieId=req.params.movieId
    let movie=await movieService.getOne(movieId).lean()
    const isOwner=movie.owner&&movie.owner==req.user?._id
     

    let stars=Number(movie.rating)
    movie.rating=new Array(stars).fill(true)
    // const casts=await castService.getByMovieId(movieId)
    //  //console.log(casts)
    res.render('movie/details',{movie,isOwner})
})

router.get('/movies/:movieId/attach',async (req,res)=>{
    const movie=await movieService.getOne(req.params.movieId).lean()
    const casts=await castService.getAll().lean()
    res.render('movie/cast-attach',{...movie,casts})
})
router.post('/movies/:movieId/attach',async (req,res)=>{
    const castId=req.body.cast
    await movieService.attach(req.params.movieId,castId)

    res.redirect(`/movies/${req.params.movieId}/attach`)

})

router.get('/movies/:movieId/edit',isAuth,async (req,res)=>{
    
    const movie= await movieService.getOne(req.params.movieId).lean()

    res.render('movie/edit',{movie})
})

router.get('/movies/:movieId/delete',isAuth,async (req,res)=>{
    await movieService.delete(req.params.movieId)
    res.redirect('/')
})


module.exports=router