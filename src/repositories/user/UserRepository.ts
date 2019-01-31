import IUserModel from "./IUserModel";
import { userSchema, UserModel } from "./UserModel";
import * as mongoose from "mongoose";
export default class UserRepository {
  private Model: mongoose.Model<IUserModel>;

  constructor() {
    this.Model = UserModel;
  }
  static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  create(...data: any) {
    return this.Model.create(data, UserRepository.generateObjectID());
  }
  delete(...data: any) {
    this.Model.deleteOne({ name: "abc" }, function(err) {});
  }
  update(...data: any) {
    this.Model.deleteOne({ name: "abc" }, function(err) {});
  }

}
