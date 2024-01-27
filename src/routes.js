const router=require('express').Router()
const homeContoller=require('./controllers/homeController')
const movieController=require('./controllers/movieController')
const castController=require('./controllers/castController')

router.use(homeContoller)
router.use (movieController)
router.use('/cast',castController)

router.get('*',(req,res)=>{
    res.render('404')
})

module.exports=router