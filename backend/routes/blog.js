const express = require('express');
const router = express.Router();
//blog model
const Blog = require('../model/blog');

//@route get /blog
//@desc show all blog
router.get("/",(req,res)=>{
    Blog.find().sort({"Date":-1}).then(data=>{
        res.json(data)
    }).catch(e=>{
        console.log('error in showing blog');
    })
})

//@route post /blog
//@desc create new blog

router.post("/",(req,res)=>{
    const {title,body} = req.body;
    new Blog({
        title,
        body
    }).save().then(data=>{
        res.json(data)
    })
})


//@route put /blog
//@desc edit blog

router.put("/",(req,res)=>{
    const {title,body,_id} = req.body;
    Blog.findByIdAndUpdate(_id,{
        title,
        body
    }).then(data=>{
        
        res.json(data);
    }).catch(e=>{
        console.log('error in editing blog',e);
    })
})


//@route delete /blog
//@desc delete blog

router.delete("/",(req,res)=>{
    const {title,body,_id} = req.body;
   Blog.findByIdAndDelete(_id).then(data=>res.json('Deleted sucessfuly'))
   .catch(e=>{
    console.log('error in deleting blog',e);
})
})


module.exports = router