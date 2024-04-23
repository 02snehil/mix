const express = require('express');
const webpageUser = require('./mongodb');
const coros = require('cors');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(coros());


//Login
server.get("/login",coros(),(req,res)=>{

})

server.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{

          const check = await webpageUser.findOne({email:email, password:password})
          if(check){
            res.json("login successfull")
          }
          else{
            res.json("login fail")
          }
    }
    catch(e){
        res.json("login fail")
    }
})



//Registration


    server.post("/register",async(req,res)=>{
        const{phone,uname,email,password,r_password}=req.body

        const data={
            phone:phone,
            uname:uname,
            email:email,
            password:password,
            r_password:r_password

        }
        try{
            const check=await webpageUser.findOne({email:email,phone:phone})
        
            if(check){
                res.json("The detail you have given that detail user is there")
                    }
            else{
                res.json("good to go for registration")
                await webpageUser.insertMany([data])
            }
        }      
        catch(e){
            res.json("Regisration fail")
        } 
    })

    server.listen(8000,()=>{
        console.log("port connected");
    })