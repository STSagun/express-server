import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
  constructor(option: any, collections: any) {
    const vSchema = Object.assign({
      createdBy: {
        default: Date.now(),
        required: true,
        type: Date,
      },
      deletedAt: {
      required: false,
      type: Date,
      },
      originalId: {
      required: true,
      type: String,
      },
    }, option);
    super(vSchema, collections);
  }
}
