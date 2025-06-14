import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Teacher from "../models/teachersmodel.js";
import Student from "../models/studentmodel.js";
import OrderList from "../models/orderlistmodel.js";
import Inventory from "../models/inventorymodel.js"
import { generateToken } from "../lib/utility.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req,res)=>{
    const {URN, URNPassword, FName, LName, Section, Year}=req.body;
    try{
        //insert code to validate if the variables are set correct here
        if(!URN||!URNPassword||!FName||!LName||!Section||!Year){
            return res.status(400).json({message:"all fields must be met"});
        }
        const student = await Student.findOne({lmsURN:URN});
        if (student) return res.status(400).json({message:"URN already in use"});
        //encrypts password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(URNPassword, salt);
        const newStudent = new Student({
            lmsURN:URN,
            lmsURNPassword: hashedPassword,
            firstName: FName,
            lastName: LName,
            section: Section,
            yearOrLevel: Year
        });

        //creates token for client then send the new student to Student table
        if (newStudent){
            generateToken(newStudent._id,res);
            await newStudent.save();
            res.status(201).json({_id: newStudent._id, validated: newStudent.validated, firstname: newStudent.firstName});
        }else{
            res.status(400).json({message:"Invalid user data"});
        }
    }catch(error){
        console.log("Error in signup controller:", error.message);
        res.status(500).json({message:"Internal server Error"});
    }
}

export const login =async (req,res)=>{
    //Handles login, returns student data and jwt
        const {USN, USNPassword} = req.body;
    try{
        const student = await Student.findOne({USN});
        if (!student) return res.status(400).json({message:"Invalid credentials"});
        const correctPassword = await bcrypt.compare(USNPassword, Student.lmsURNPassword);
        if(!correctPassword) return res.status(400).json({message:"Invalid credentials"});
        generateToken(student._id,res);
        res.status(200).json({
            id: student._id,
            fname: student.firstName,
            lname: student.lastName,
            section: student.section,
            level: student.yearOrLevel
        });
    }catch(error){
        console.log("Error in login controller:", error.message);
        res.status(500).json({message:"Internal server Error"});
    }
}
export const logout =(req,res)=>{
    try{
        res.cookie("tokencookie","",{maxAge:0});
        res.status(200).json({message:"logged out"});
    }catch(error){
        console.log("Error in logout controller:", error.message);
        res.status(500).json({message:"Internal server Error"});
    }
}
export const seeProductList = async (req,res) =>{
    try{
        const inventory = await Inventory.find({isForSale:true});
        if(inventory.length <=0) return res.status(400).json({message: "Inventory is empty"});
        return res.status(200).json(inventory);
    }catch(error){
        console.log("error in seeProductList controller");
        res.status(500).json({message:"Internal server Error"});
    }
}