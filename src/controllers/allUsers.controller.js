import { User } from "../models/user.models.js";
import asyncHandler from "../utils/asyncHandler.js";

const allUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});

export { allUsers };