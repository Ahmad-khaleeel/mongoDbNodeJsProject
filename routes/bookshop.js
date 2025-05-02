const express = require("express")

const router = express.Router()

const shop =  require("../models/BookShop")
const Shop =  require("../models/BookShop")


// add a new Bookshop

router.post("/",async(req,res)=>{
    try{
        const bookShop = new Store(req.body)

        await bookShop.save()
        res.status(201).send(bookShop)
    }catch(error){
        res.status(400).send(error)
    }
})


// get all bookShop

router.get("/:id",async(req,res)=>{
    const bookShops = await BookShop.find() 
        res.send(bookShops)

})

// get bookshop by id

router.get("/:id",async(req,res)=>{
    const shop = await Shop.findOne({shopId:req.params.id})
    if(!shop) return res.status(400).send('The shop is not found')
          
        res.send(shop)

})

// update bookshop information 

router.put("/:id",async(req,res)=>{
    const shop = await Shop.findOne({shopId:req.params.id},req.body)
    if(!shop) return res.status(400).send('The shop is not found')
        res.send(shop)
})


// delete BookShop

router.delete("/:id",async(req,res)=>{
    const remove = await Shop.findOne({shopId:req.params.id})

    if(remove.deletedCount===0) return res.status(400).send('the shop is not found')
        
        res.send({message:'the bookshop has been deleted'})

})

module.exports = router