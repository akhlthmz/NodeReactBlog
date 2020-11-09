const router = require("express").Router();
const auth = require('./middlewares/auth')
const query = require('../config/queryDB')

router.get('/', auth ,async (req,res)=>{
    try{
        const sql1 ="SELECT * FROM Blog.Articles"
        const result = await query(sql1)
        .then(res => res)
        .catch(err=>console.log(err))
        res.send(result)

    }catch(err){
        res.status(400).json("Error:" + err);
    }
})

//Creating a new article

router.post('/add',auth, async (req,res)=>{
    const {title,content} = req.body
    try{
        let sql2 = "INSERT INTO Blog.Articles VALUE (default,?,?)"
        await query(sql2,[title,content])
            .catch(err=>console.log(err))
        res.send("New post added successfully")
        
    }catch(err){
        res.status(400).json("Error:" + err);
    }

})

module.exports = router;