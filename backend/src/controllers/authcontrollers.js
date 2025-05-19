import { generateToken } from "../lib/utility.js";
import Student from "../models/studentmodel.js";
import bcrypt from "bcryptjs";

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
export const login =(req,res)=>{
    res.send("login route");
}
export const logout =(req,res)=>{
    res.send("logout route");
}