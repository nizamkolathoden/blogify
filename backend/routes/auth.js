const router = require('express').Router();

const auth = require('../model/auth');

//auth model
const User = require('../model/auth');

//bcrypt.js
const bcrypt = require('bcryptjs')

//json web token
const jwt = require('jsonwebtoken');

//@route post /auth/login
//@desc login user

router.post("/login",(req,res)=>{
    const {userName,password} = req.body;
    if(!userName||!password) 
   return res.status(401).json({error:"please enter userName and password"});
    User.findOne({userName}).then(savedUser=>{
        // console.log(savedUser);
        //401
        if(!savedUser) 
        return res.status(401).json({error:'wrong usernam & password'});

        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(!doMatch) 
            return res.status(401).json({error:"wrong username & password"});
           const token = jwt.sign({_id:savedUser._id},process.env.JWT);
           res.json(token)

        })
    })

})

//@route post /auth/signup
//@desc signup user

router.post("/signup",(req,res)=>{
    const {userName,password,name} = req.body;
    if(!userName||!password||!name) 
   return res.status(409).json({error:"please enter userName and password"});
   
auth.findOne({userName:userName}).then(found=>{
    if(found)
    return res.status(409).json({error:'userName aleardy taken'});

    //hashing password
    bcrypt.hash(password,11).then(hashedPassword=>{
        new User({
            userName,
            password:hashedPassword,
            name
        }).save().then(user=>{
            res.json('User Created Sucessfuly');

        }).catch(e=>{
            console.log('error in saving new user');
        })
    }).catch(e=>{
        console.log('error in hashing password:',e);
    })
})

    

})


//export auth route

module.exports = router;