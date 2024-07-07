import {User} from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { UploadOnCloudinary } from "../utils/cloudinary.js";


const registerUser=asyncHandler(async (req,res)=>{

const {name,email,MobileNumber}= req.body

if ([name, email, MobileNumber].some((field) => field === undefined || field.trim() === "")) {
    throw new ApiError(409, "Fill all the credentials");
}



const avatar=req.files?.avatar?.[0].path

if (!avatar) {
    console.log("no files receives");
}


console.log(avatar);
const response= await UploadOnCloudinary(avatar);

console.log(response);

const existedUser=await User.findOne({
    $or : [{MobileNumber},{email}]
})

if(existedUser){
    throw new ApiError(409,"User already exists")
}


//creating a user
const user = await User.create({
    name,
    email,
    MobileNumber,
    avatar:response.url
})

const createdUser = await User.findById(user._id)



// Continue with user creation logic here if user does not already exist


res.status(200).json(new ApiResponse(201,"success" ,createdUser ))




})
 


export { registerUser }