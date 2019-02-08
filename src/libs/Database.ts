import * as mongoose from 'mongoose';
import seed from './seedData';
// import { deleteData, UpdateData } from './seedData';
class Database {
  public static async open(mongo) {
    const result = await mongoose.connect(
          mongo,
          { useNewUrlParser: true },
        );
    const result1 = await seed();
    return result;
    }
  public static disconnect() {
    mongoose.disconnect();
  }
}
export default Database;
