const express=require("express")
const routes=express.Router()

routes.get('/add-product',(req,res,next)=>{

    res.send('<form action="/admin/product" method="post"><input type="text" name="product"><input type="number" name="size"> <button type="submit">submit</button></form>')
    next()
})
routes.post('/product',(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/shop')
})
module.exports=routes