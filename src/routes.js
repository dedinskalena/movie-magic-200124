const router=require('express').Router()
const homeContoller=require('./controllers/homeController')
const movieController=require('./controllers/movieController')
const castController=require('./controllers/castController')
const authController=require('./controllers/authController')

router.use(homeContoller)
router.use (movieController)
router.use('/cast',castController)
router.use('/auth',authController)

router.get('*',(req,res)=>{
    res.render('404')
})

module.exports=router