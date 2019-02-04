import * as mongoose from 'mongoose';
import seed from './seedData';
import { deleteData, UpdateData } from './seedData';
class Database {
  public static open(mongo) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongo,
          { useNewUrlParser: true },
        )
        .then((result) => {
          seed();
          // UpdateData();
          // deleteData();
          resolve(result);
          })
        .catch((err) => reject(err));
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
export default Database;
