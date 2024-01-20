const router=require('express').Router()
const homeContoller=require('./controllers/homeController')
const movieController=require('./controllers/movieController')

router.use(homeContoller)
router.use (movieController)
module.exports=router