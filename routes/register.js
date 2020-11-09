const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const query = require('../config/queryDB')
const secretKey = config.get("JWT_SECRET");
const nameChecker = require("./middlewares/nameChecker")

//Register user
router.post('/user',[nameChecker], [
    check("userName", "Username is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async(req,res)=>{
    

      const {userName,password} = req.body
      const errors = validationResult(req)
      if(!errors.isEmpty()){
          
          return res.status(400).json({ errors: errors.array() })
      }

      //password encryption

      try{
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
        const sql = "INSERT INTO Blog.Users VALUE (default,?,?)"
        await query(sql,[userName,hashedPassword]).catch((err)=>console.log(err))

        //returning jwt on successful registration
        const payload = {
          user: {
            name: userName
          },
        }
        jwt.sign(payload, secretKey, { expiresIn: 360000 }, (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
      }catch(err){
        res.status(500).send("Server error");

      }
  })

module.exports = router;
