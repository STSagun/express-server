import { rejects } from 'assert';
import { Next } from 'express';
import * as mongoose from 'mongoose';
import errorHandler from '../../libs/routes/errorHandler';
export default class VersionableRepositories<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
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
        throw {
          error: 'Unauthorized Access',
          message: 'Data of this user is not present in Database',
          status: 400,
        };
      }
      return result;
  }
  public userCount() {
    return this.modelType.countDocuments();
  }
  public genericCreate(data: any): Promise<D> {
    const id = VersionableRepositories.generateObjectID();
    return this.modelType.create({ ...data, _id: id, originalId: id });
  }
  public genericDelete(data) {
    return this.modelType.updateOne(
      { ...data, deletedAt: { $exists: false } },
      { deletedAt: Date.now() },
    );
  }
  public async genericUpdate(data: any, DTU: any) {
    const result = await this.modelType
      .findOne({ originalId: data._id, deletedAt: { $exists: false } })
      .lean();
    if (!result) {
      throw { error: 'Data not present' };
    }
    const dataUpdate = Object.assign(result, DTU);
    const id = VersionableRepositories.generateObjectID();
    await this.modelType.create({ ...dataUpdate, _id: id });
    const result1 = await this.modelType.updateOne(
      { _id: result._id, deletedAt: { $exists: false } },
      { deletedAt: Date.now() },
    );
    if (!result1) {
      throw {
        error: 'Unauthorized Access',
        message: 'Data of this user is not present in Database',
        status: 400,
      };
    }
  }
  public async Data(val, value, value1) {
    const result = await this.modelType.find(val, undefined, {
      limit: Number(value1),
      skip: Number(value),
    });
    const userCount = await this.userCount();
    const result2 = Object.assign({ userCount }, result);
    if (!result2) {
      throw {
        error: 'Unauthorized Access',
        message: 'Data of this user is not present in Database',
        status: 400,
      };
    }
    return result2;
  }
}
