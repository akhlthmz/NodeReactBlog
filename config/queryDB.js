const connection = require('./connectDb')

module.exports = function(queryString,escapedValues){

   return new Promise((resolve,reject)=>{
        connection.query(queryString,escapedValues,(err,result)=>{

            if(err) reject(err)
            resolve(result)    
        })
    })
}