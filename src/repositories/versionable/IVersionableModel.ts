import * as mongoose from 'mongoose';
export default interface IUserModel extends mongoose.Document {
originalId: string;
deletedAt: Date;
}
