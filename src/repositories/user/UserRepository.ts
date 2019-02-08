import * as mongoose from 'mongoose';
import IUserModel from '../entities/IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { UserModel } from './UserModel';
export default class UserRepository extends VersionableRepository < IUserModel, mongoose.Model<IUserModel> > {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() { {
    super(UserModel);
  }
}

public create(data: any): Promise<IUserModel> {
  try {
  return this.genericCreate(data);
  } catch (err) {
    throw err;
  }
}
public delete(data: any) {
  return this.genericDelete(data);

}
public async update(data: any, DTU: any) {
    const result = await this.genericUpdate(data, DTU);
  }
}
