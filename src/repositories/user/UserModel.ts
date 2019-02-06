import * as mongoose from 'mongoose';
import IUserModel from '../entities/IUserModel';
import UserSchema from './UserSchema';

export const userSchema = new UserSchema({
  collection: 'user',
});
export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
(
  'user',
  userSchema,
  'user',
  true,
);
