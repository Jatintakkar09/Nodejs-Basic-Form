import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const allUsers= asyncHandler(async (req,res)=>{
 const users=await User.find()

res.status(200).json(
   new ApiResponse(200,"success",users)
 )
})


export { allUsers }