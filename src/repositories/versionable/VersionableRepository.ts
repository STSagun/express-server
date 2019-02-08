import { rejects } from 'assert';
import { Next } from 'express';
import * as mongoose from 'mongoose';
import errorHandler from '../../libs/routes/errorHandler';
export default class VersionableRepositories<D extends mongoose.Document, M extends mongoose.Model<D>>  {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private modelType: M;

  constructor(Model) {
    this.modelType = Model;
  }
  public async userFind(data) {
    try {
    console.log('asdfdsf#@@$@!#$@#!$!#@$', data);
    const result = await this.modelType.findOne(data).lean();
    if (!result) {
    throw ( {error: 'Unauthorized Access',
    message: 'Data of this user is not present in Database',
    status: 400 });
  }
    console.log(result, 'res:::::::::::::::::;');
    return result;
  } catch (err) {
    console.log(err);
  }
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
  public async genericUpdate(data: any, DTU: any) {
    console.log(data._id, 'data id on which we are  updating:::::::::');
    // try {
    const result = await this.modelType.findOne({originalId: data._id, deletedAt: {$exists: false}}).lean();
    console.log(result, 'Findone result of update api');
    if (!result) {
          console.log('in UPdate (findone):::::::::::::::::::::::::::');
          throw {error: 'Data not present',
          message: 'Data of this user is not present in Database',
          status: 400 };
        }
    console.log('after throw:::::::::::::::');
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
    // } catch (error) {
    //   console.log('*****************', error);
    //   throw error;
    // }
  }
  public async Data(val, value, value1) {
    console.log(val, 'value:::::::::::::::::::::::');
    const result = await this.modelType.find(val, undefined, { skip : Number(value), limit: Number(value1) });
    const userCount = await this.userCount();
    const result2 = Object.assign({userCount}, result);
    console.log(result2);
    if (!result2) {
      throw ( {error: 'Unauthorized Access',
      message: 'Data of this user is not present in Database',
      status: 400 });
    }
    return result2;
    }
}
