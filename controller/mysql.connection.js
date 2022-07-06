const mysql=require('mysql');

const connection=mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password:'',
    database:'student'


})

connection.connect((err)=>{
    if(err){
        console.log("Error Occured While Connecting Database",err);

    }else {
        console.log("Database Connected");

    }
})


module.exports=connection;