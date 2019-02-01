import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { UserModel, userSchema } from './UserModel';
export default class UserRepository {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private Model: mongoose.Model<IUserModel>;

  constructor() {
    this.Model = UserModel;
  }
  public create(...data: any) {
    return this.Model.create(data, UserRepository.generateObjectID());
  }
  public delete(...data: any) {
    this.Model.deleteMany({ name: 'abcd' }, (err) => {
      if (err) { throw err; }
      console.log('document deleted');

    });
  }
  public update(...data: any) {
    this.Model.updateOne({ id: '8' }, { $set: {name: 'ab', id: '1' } }, (err) => {
    if (err) { throw err; }
    console.log('1 document updated');

  });

  }

}
