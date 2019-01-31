import UserSchema from "./UserSchema";
import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";

export const userSchema = new UserSchema({
  collection: "user"
})
console.log("------------2-------")
export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
(
  "user",
  userSchema,
  "user",
  true
)
