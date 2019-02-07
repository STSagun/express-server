import { Next } from 'express';
import * as mongoose from 'mongoose';
export default class VersionableRepositories<D extends mongoose.Document, M extends mongoose.Model<D>>  {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private modelType: M;

  constructor(Model) {
    this.modelType = Model;
  }
  public async userFind(data) {
  const result = await this.modelType.findOne(data).lean();
  if (!result) {
    throw ( {error: 'Unauthorized Access',
    message: 'Data of this user is not present in Database',
    status: 400 });
  }
  return result;
  }
  public userCount() {
  return this.modelType.countDocuments();
  }
  public genericCreate(data: any): Promise<D> {
    const id = VersionableRepositories.generateObjectID();
    return this.modelType.create({...data, _id: id, originalId: id});
  }
  public genericDelete(data) {
    return this.modelType.updateOne({...data, deletedAt: {$exists: false}},  { deletedAt: Date.now() });
  }
  public async genericUpdate(data: any, DTU: any, next: Next) {
    console.log(data._id, 'data:::::::::');
    const result = await this.modelType.findOne({originalId: data._id, deletedAt: {$exists: false}}).lean();
    if (!result) {
        throw ( {error: 'Unauthorized Access',
        message: 'Data of this user is not present in Database',
        status: 400 });
      }
    const dataUpdate = Object.assign(result, DTU);
    const id = VersionableRepositories.generateObjectID();
    await this.modelType.create({...dataUpdate, _id: id });
    const result1 = await this.modelType.updateOne({ _id: result._id, deletedAt: {$exists: false}},
      { deletedAt: Date.now() });
    if (!result1) {
      throw ( {error: 'Unauthorized Access',
      message: 'Data of this user is not present in Database',
      status: 400 });
    }
  }
  public async Data() {
    const result = await this.modelType.find();
    console.log(result);
    if (!result) {
      throw ( {error: 'Unauthorized Access',
      message: 'Data of this user is not present in Database',
      status: 400 });
    }
    return result;
    }
}
