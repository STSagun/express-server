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
  public create(data: any): Promise<IUserModel> {
    return this.Model.create({...data, _id: UserRepository.generateObjectID()});
  }
  public delete() {
    return this.Model.deleteMany({ name: '' });
  }
  public update() {
    return this.Model.updateMany({ name: 'abcdsd' }, { $set: {name: 'sagun' } });

  }
}
