import * as mongoose from "mongoose";
import seed from "./seedData";
import { deleteData } from "./seedData";
class Database {
  static open(mongo) {
    return new Promise(function(resolve, reject) {
      mongoose
        .connect(
          mongo,
          { useNewUrlParser: true }
        )
        .then(result => {
          seed();
          deleteData();
          resolve(result);
        })
        .catch(err => reject(err));
    });
  }
  static disconnect() {
    mongoose.disconnect();
  }
}
export default Database;
