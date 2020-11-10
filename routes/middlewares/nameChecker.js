const query = require('../../config/queryDB')

module.exports = async function isUserNameUnique(req,res,next){
  
    let sql = "SELECT * FROM Blog.Users AS users WHERE users.userName = ?"
    const result = await query(sql,[req.body.userName])
    .then(res=>{
        return res
    })
    .catch(err=>console.log(err))
    
    if(result.length > 0){
        return res.status(401).json({
           msg: "This username is taken. Please use another one",
           }); 
    }
    else if(req.body.userName.trim() === ""){
        return res.status(401).json({
            msg: "Please add username",
          });

    }
    next()
}




    // connection.query(
    //      sql,[req.body.userName],(err,result)=>{
    //         if(!err){
    //             if(result.length > 0){
    //                 return res.status(401).json({
    //                     msg: "This username is taken. Please use another one",
    //                     }); 
    //             }
    //             else{
    //                 next()}
    //             }
    //         else{
    //             console.log(err)
    //             next()
    //         }
    //     })

  
