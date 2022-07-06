const connection=require('./mysql.connection');
const {validationResult}=require('express-validator');
module.exports={
    getAllStudents: (req, res, next) =>{
    connection.query('SELECT * FROM stud',(err,data)=>{
        if(err){
            res.send({error:true,message:err});
        }else{
            res.send({error:false,info:data});
        }

    })
},
createdata:(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    connection.query(`INSERT INTO stud(Roll_No,Name,Email_ID, Age) VALUES (0,'${req.body.Name}','${req.body.Email_ID}','${req.body.Age}')`,
    (err,data)=>{
          
    if (err){
               res.send({error:true,message:err});
           }else{
               if(data.affectedRows>0){
                   res.send({error:false,message:"Data Successfuly Inserted"});
    
               }else{
                   res.send({error:false,message:"Record Not Successfuly Inserted"});
               }
           
            } 
    })
    
    },
    finddata:(req,res,next)=>{
        connection.query(`SELECT Roll_No, Name, Email_ID, Age FROM stud WHERE Roll_No=${req.params.id}`,(err,data)=>{
            if(err){
                res.send({error:true,message:err});
            }else{
                res.send({error:false,info:data});
            }
        
    })
    },
    deletedata:(req,res,next)=>{
        connection.query(`DELETE FROM stud WHERE Roll_No=${req.params.id}`,(err,data)=>{
            if(err){
                res.send({error:true,message:err})
            }else{
                if(data.affectedRows>0){
                    res.send({error:false,message:"Record Successfully Deleted"});
                }else{
                    res.send({error:false,message:"Record Not Deleted"});
                }
            }
        })
    },
    dataupdate:(req,res,next)=>{
        connection.query(`UPDATE stud SET Age='${req.body.Age}' WHERE Roll_No=${req.params.id}`,(err,data)=>{
            if(err){
                res.send({error:true,message:err});
            }else{
                if(data.affectedRows>0){
                    res.send({error:false,message:"Record Successfully Updated"});
                }else{
                    res.send({error:false,message:"Record Not Updated"});
                }
            }
        });
    }

}
