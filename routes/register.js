const express=require("express")
const {userModel}=require("../models/user")
const router=express.Router()

router.post("/",async(req,res)=>{
    const {username,email,password}=req.body

    if(!username){
        return res.status(400).json({"message":"Username cannot be empty"})
    }

    if(!email){
        return res.status(400).json({"message":"Email cannot be empty"})
    }

    if(password<8 || password >=16){
        return res.status(400).json({"message":"Password length should be greater than 8 or less than or equal to 16"})
    }

    try {
        const newUser=new userModel({username,email,password})
        await newUser.save()
        res.status(200).json({"message":"Successfully register"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message":"Something went wrong. Please try again later." });
    }

})

module.exports= {router}


