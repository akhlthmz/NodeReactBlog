const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const secretKey = config.get("JWT_SECRET");
const query = require('../config/queryDB')
const auth = require('./middlewares/auth')

router.get('/getuser',auth,async(req,res)=>{
  try{
    const sql1 = "SELECT userName FROM Blog.Users WHERE userName = ?"
    const user = await query(sql1,[req.user.name]) 
    res.json(user)

  }catch(err){
    console.error(err.message);
    res.status(500).send("Server error");
  }
})


//Authenticate user and get token 

router.post('/login',[
    check("userName", "Please include a valid username").not().isEmpty(),
    check("password", "Password is required").exists(),
], async (req,res)=>{
    const {userName,password} = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try{
        const sql = "SELECT * FROM Blog.Users AS users WHERE users.userName = ? "
        
        const test = await query(sql,[userName])
        .then(res => res)
        .catch(err=>console.log(err))

        if(test.length===0){
            return res
            .status(400)
            .json({ errors: [{ msg: "Invalid username or password" }] });
        }
        const isMatch = await bcrypt.compare(password,test[0].password)
        if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ msg: "Invalid username or password" }] });
          }
        
        const payload = {
            user: {
              name: userName
            },
          }
        jwt.sign(payload,secretKey,{expiresIn:36000},(err,token)=>{
            if(err) throw err
            res.json({token})
        })

    }catch(err){
      console.log(err.message);
      res.status(500).send("Server error");
    }
    
})


module.exports = router;
