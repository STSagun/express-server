import * as mongoose from 'mongoose';

export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const data = {
      _id: String,
      name: String,
    };
    super(data, option);
  }

}
