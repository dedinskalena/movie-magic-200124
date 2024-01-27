const router=require('express').Router()

router.get('/create',(req,res)=>{
    res.render('cast/create')
})

router.post('/create',(req,res)=>{
    const castData=req.body
    //console.log(body)
    res.redirect('/')
})

module.exports=router