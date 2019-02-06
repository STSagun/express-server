import * as mongoose from 'mongoose';
export default class VersionableRepositories<D extends mongoose.Document, M extends mongoose.Model<D>>  {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private modelType: M;

  constructor(Model) {
    this.modelType = Model;
  }
  public userFind(data) {
    return this.modelType.findOne(data).lean();
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
  public genericUpdate(data: any, DTU: any): Promise<D> {
    return this.modelType.findOne({...data, deletedAt: {$exists: false}}).lean()
    .then((result) => {
      const dataUpdate = Object.assign(result, DTU);
      const id = VersionableRepositories.generateObjectID();
      return this.modelType.create({...dataUpdate, _id: id });
    })
  .then((res) => {
    return this.modelType.updateOne({...data, deletedAt: {$exists: false}}, { deletedAt: Date.now() })
  .catch((err) => {
    return err;
});
  });
}
}
