import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    MobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
    avatar:{
        type:String
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export {User}
