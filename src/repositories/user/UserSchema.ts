import * as mongoose from 'mongoose';
import { stringify } from 'querystring';

export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const data = {
      _id: String,
      email: String,
      name: String,
      role: String,
    };
    super(data, option);
  }

}
