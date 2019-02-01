import * as mongoose from 'mongoose';
import successHandler from '../../libs/routes/successHandler';
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
  public userFind(data) {
    console.log('data-->', data);
    return this.Model.findOne(data, (err, result) => {
      console.log('result-->', result);
      if (err) {
          return err;
      }
      return result;
    });
  }
  public userCount() {
  return this.Model.countDocuments();
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
